var isNaN = require('./isNaN');

module.exports = function isVersion(version, prefix) {
  if (typeof version !== 'string') return false;

  if (prefix) {
    if (typeof prefix !== 'string') prefix = '' + prefix;
    if (version.indexOf(prefix) !== 0) return false;
    version = version.slice(prefix.length);
  }
  var parts = version.split('.');
  if (parts.length !== 3) return false;
  return !isNaN(+parts[0]) && !isNaN(+parts[1]) && !isNaN(+parts[2]);
};
