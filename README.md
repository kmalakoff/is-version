# is-version

Checks whether a string has three dot-separated numeric components, with an
optional required prefix. It is not a strict semver validator.

```sh
npm install is-version
```

```js
var assert = require('assert');
var isVersion = require('is-version');

assert.ok(isVersion('12.0.1'));
assert.ok(isVersion('v12.0.1', 'v')); // with prefix
assert.ok(!isVersion('12'));
assert.ok(!isVersion('12.0'));
assert.ok(!isVersion('12.0.1', 'v')); // with prefix
assert.ok(isVersion('1..2')); // numeric coercion accepts empty components
```
