const path = require('path');

module.exports = function (config) {
  config.resolve.alias['src'] = path.resolve(__dirname, 'src');

  return config;
};