const R = require('ramda')
const camelize = require('underscore.string.fp/camelize')
const capitalize = require('underscore.string.fp/capitalize')
const axios = require('axios')
const crypto = require('crypto')

const slugify = R.pipe(camelize, capitalize)
const typeGenerator = R.curry(
  (type, service, id) =>
    id
      ? `${type}${slugify(service)}${id.toString()}`
      : `${type}${slugify(service)}`,
)
const isFK = R.test(/_id$/)
const isFKs = R.test(/_ids$/)
const keyIsFK = ([key]) => isFK(key)
const keyIsFKs = ([key]) => isFKs(key)
const fKToService = R.replace(/_id$/, 's')
const fKsToService = R.replace(/_ids$/, '')
const camelizeKeys = ([key, value]) => [camelize(key), value]

exports.sourceNodes = async ({boundActionCreators}, pluginOptions) => {
  const {createNode} = boundActionCreators
  const {api = '', params, path, services = [], type = 'REST'} = pluginOptions
  const serviceGenerator = typeGenerator(type)
  const fKToLink = ([key, value]) => [
    R.replace(/_id$/, '___NODE')(key),
    serviceGenerator(fKToService(key), value),
  ]
  const fKsToLinks = ([key, value]) => [
    R.replace(/_ids$/, value.length === 0 ? '' : '___NODE')(key),
    R.map(serviceGenerator(fKsToService(key)), value),
  ]
  const trans = R.cond([
    [keyIsFK, fKToLink],
    [keyIsFKs, fKsToLinks],
    [R.T, camelizeKeys],
  ])
  const transformObj = R.pipe(R.toPairs, R.map(trans), R.fromPairs)

  R.forEach(async (service) => {
    const {data} = await axios.get(`${api}${service}${params}`)
    const nodes = R.map((item) => {
      const contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(item))
        .digest(`hex`)

      const idGenerator = serviceGenerator(service)
      const node = R.merge(transformObj(item), {
        id: idGenerator(item.id),
        children: [],
        parent: '__SOURCE__',
        internal: {
          type: idGenerator(0),
          contentDigest,
        },
      })
      return node
    }, R.prop(path, data)) // TODO use R.path

    R.map(createNode, nodes)
  }, services)
}
