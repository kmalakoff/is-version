// biome-ignore lint/suspicious/noShadowRestrictedNames: Legacy
function isNaN(value) {
  // biome-ignore lint/suspicious/noSelfCompare: Legacy
  return value !== value;
}

export default function isVersion(version: string, prefix?: string) {
  if (typeof version !== 'string') return false;

  if (prefix) {
    if (typeof prefix !== 'string') prefix = `${prefix}`;
    if (version.indexOf(prefix) !== 0) return false;
    version = version.slice(prefix.length);
  }
  const parts = version.split('.');
  if (parts.length !== 3) return false;
  return !isNaN(+parts[0]) && !isNaN(+parts[1]) && !isNaN(+parts[2]);
}
