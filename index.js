var isNaN = require('./lib/is-nan');

module.exports = function isVersion(version) {
  if (version[0] !== 'v') return false;
  var parts = version.slice(1).split('.');
  if (parts.length !== 3) return false;
  return !isNaN(+parts[0]) && !isNaN(+parts[1]) && !isNaN(+parts[2]);
};
