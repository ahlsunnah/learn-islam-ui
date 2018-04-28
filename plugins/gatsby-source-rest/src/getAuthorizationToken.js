/* eslint import/no-extraneous-dependencies:0 no-console:0 */
const axios = require('axios')

const getAuthorizationToken = ({api, email, password}) =>
  axios({
    data: {
      strategy: 'local',
      email,
      password,
    },
    method: 'post',
    url: `${api}authentication/`,
  })
    .then((result) => result.data.accessToken)
    .catch((error) => {
      if (error.response) {
        console.error(
          error.response.status,
          error.response.statusText,
          error.response.config,
        )
      } else console.error(error)
    })

module.exports = getAuthorizationToken
