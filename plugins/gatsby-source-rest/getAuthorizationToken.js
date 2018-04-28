'use strict';

/* eslint import/no-extraneous-dependencies:0 no-console:0 */
var axios = require('axios');

var getAuthorizationToken = function getAuthorizationToken(_ref) {
  var api = _ref.api,
      email = _ref.email,
      password = _ref.password;
  return axios({
    data: {
      strategy: 'local',
      email,
      password
    },
    method: 'post',
    url: `${api}authentication/`
  }).then(function (result) {
    return result.data.accessToken;
  }).catch(function (error) {
    if (error.response) {
      console.error(error.response.status, error.response.statusText, error.response.config);
    } else console.error(error);
  });
};

module.exports = getAuthorizationToken;