var proxyquire =  require('proxyquire');
var restToRegexp = require('rest-to-regexp');
restToRegexp['@global'] = true;
module.exports = proxyquire('express/lib/router', { 'path-to-regexp': restToRegexp });
