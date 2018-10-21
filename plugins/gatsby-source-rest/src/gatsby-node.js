const R = require('ramda')
const camelize = require('underscore.string.fp/camelize')
const capitalize = require('underscore.string.fp/capitalize')
const axios = require('axios')
const crypto = require('crypto')
const getAuthorizationToken = require('./getAuthorizationToken')

const slugify = R.pipe(
  camelize,
  capitalize,
)
const typeGenerator = R.curry(
  (type, service, id) =>
    id ? `${type}${slugify(service)}${id}` : `${type}${slugify(service)}`,
)
const isFK = R.test(/_id$/)
const isFKs = R.test(/_ids$/)
const keyIsFK = ([key]) => isFK(key)
const keyIsFKs = ([key]) => isFKs(key)
const fKToService = R.replace(/_id$/, 's')
const fKsToService = R.replace(/_ids$/, '')
const camelizeKeys = ([key, value]) => [camelize(key), value]
const generateDigest = (item) =>
  crypto
    .createHash(`md5`)
    .update(JSON.stringify(item))
    .digest(`hex`)

exports.sourceNodes = async ({actions}, pluginOptions) => {
  const {createNode} = actions
  const {
    api = '',
    email,
    params,
    password,
    path,
    services = [],
    type = 'REST',
  } = pluginOptions
  const serviceGenerator = typeGenerator(type)
  const fKToLink = ([key, value]) => [
    R.pipe(
      camelize,
      R.replace(/Id$/, '___NODE'),
    )(key),
    serviceGenerator(fKToService(key), value),
  ]
  const fKsToLinks = ([key, value]) => [
    R.pipe(
      camelize,
      R.replace(/Ids$/, value.length === 0 ? '' : '___NODE'),
    )(key),
    R.map(serviceGenerator(fKsToService(key)), value),
  ]
  const trans = R.cond([
    [keyIsFK, fKToLink],
    [keyIsFKs, fKsToLinks],
    [R.T, camelizeKeys],
  ])
  const transformObj = R.pipe(
    R.toPairs,
    R.map(trans),
    R.fromPairs,
  )

  const authorizationToken = await getAuthorizationToken({api, email, password})
  // console.log('authorized', authorizationToken)

  const promises = R.map(
    (service) =>
      new Promise((resolve, reject) => {
        try {
          // console.log(`${api}${service}${params}`)
          axios({
            url: `${api}${service}${params}`,
            headers: {Authorization: authorizationToken},
          })
            .then(({data}) => {
              const idGenerator = serviceGenerator(service)
              const nodes = []
              R.forEach((item) => {
                const node = R.merge(transformObj(item), {
                  id: idGenerator(item.id),
                  children: [],
                  parent: '__SOURCE__',
                  internal: {
                    type: idGenerator(0),
                    contentDigest: generateDigest(item),
                  },
                })
                nodes.push(node)
              }, R.prop(path, data)) // TODO use R.path
              R.forEach(createNode, nodes)
              // console.log('DONE')
              resolve()
            })
            .catch((error) => {
              console.log(error)
              reject()
            })
        } catch (e) {
          console.log(e)
          reject()
        }
      }),
    services,
  )
  return Promise.all(promises).then((values) => {
    console.log('Feathers data have been imported !')
  })
}
