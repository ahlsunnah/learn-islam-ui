'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var R = require('ramda');
var camelize = require('underscore.string.fp/camelize');
var capitalize = require('underscore.string.fp/capitalize');
var axios = require('axios');
var crypto = require('crypto');
var getAuthorizationToken = require('./getAuthorizationToken');

var slugify = R.pipe(camelize, capitalize);
var typeGenerator = R.curry(function (type, service, id) {
  return id ? `${type}${slugify(service)}${id}` : `${type}${slugify(service)}`;
});
var isFK = R.test(/_id$/);
var isFKs = R.test(/_ids$/);
var keyIsFK = function keyIsFK(_ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      key = _ref2[0];

  return isFK(key);
};
var keyIsFKs = function keyIsFKs(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 1),
      key = _ref4[0];

  return isFKs(key);
};
var fKToService = R.replace(/_id$/, 's');
var fKsToService = R.replace(/_ids$/, '');
var camelizeKeys = function camelizeKeys(_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
      key = _ref6[0],
      value = _ref6[1];

  return [camelize(key), value];
};
var generateDigest = function generateDigest(item) {
  return crypto.createHash(`md5`).update(JSON.stringify(item)).digest(`hex`);
};

exports.sourceNodes = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref7, pluginOptions) {
    var boundActionCreators = _ref7.boundActionCreators;

    var createNode, _pluginOptions$api, api, email, params, password, path, _pluginOptions$servic, services, _pluginOptions$type, type, serviceGenerator, fKToLink, fKsToLinks, trans, transformObj, authorizationToken, promises;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createNode = boundActionCreators.createNode;
            _pluginOptions$api = pluginOptions.api, api = _pluginOptions$api === undefined ? '' : _pluginOptions$api, email = pluginOptions.email, params = pluginOptions.params, password = pluginOptions.password, path = pluginOptions.path, _pluginOptions$servic = pluginOptions.services, services = _pluginOptions$servic === undefined ? [] : _pluginOptions$servic, _pluginOptions$type = pluginOptions.type, type = _pluginOptions$type === undefined ? 'REST' : _pluginOptions$type;
            serviceGenerator = typeGenerator(type);

            fKToLink = function fKToLink(_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  key = _ref10[0],
                  value = _ref10[1];

              return [R.pipe(camelize, R.replace(/Id$/, '___NODE'))(key), serviceGenerator(fKToService(key), value)];
            };

            fKsToLinks = function fKsToLinks(_ref11) {
              var _ref12 = _slicedToArray(_ref11, 2),
                  key = _ref12[0],
                  value = _ref12[1];

              return [R.pipe(camelize, R.replace(/Ids$/, value.length === 0 ? '' : '___NODE'))(key), R.map(serviceGenerator(fKsToService(key)), value)];
            };

            trans = R.cond([[keyIsFK, fKToLink], [keyIsFKs, fKsToLinks], [R.T, camelizeKeys]]);
            transformObj = R.pipe(R.toPairs, R.map(trans), R.fromPairs);
            _context.next = 9;
            return getAuthorizationToken({ api, email, password });

          case 9:
            authorizationToken = _context.sent;

            // console.log('authorized', authorizationToken)

            promises = R.map(function (service) {
              return new Promise(function (resolve, reject) {
                try {
                  // console.log(`${api}${service}${params}`)
                  axios({
                    url: `${api}${service}${params}`,
                    headers: { Authorization: authorizationToken }
                  }).then(function (_ref13) {
                    var data = _ref13.data;

                    var idGenerator = serviceGenerator(service);
                    var nodes = [];
                    R.forEach(function (item) {
                      var node = R.merge(transformObj(item), {
                        id: idGenerator(item.id),
                        children: [],
                        parent: '__SOURCE__',
                        internal: {
                          type: idGenerator(0),
                          contentDigest: generateDigest(item)
                        }
                      });
                      nodes.push(node);
                    }, R.prop(path, data)); // TODO use R.path
                    R.forEach(createNode, nodes);
                    // console.log('DONE')
                    resolve();
                  }).catch(function (error) {
                    console.log(error);
                    reject();
                  });
                } catch (e) {
                  console.log(e);
                  reject();
                }
              });
            }, services);
            return _context.abrupt('return', Promise.all(promises).then(function (values) {
              console.log('Feathers data have been imported !');
            }));

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref8.apply(this, arguments);
  };
}();