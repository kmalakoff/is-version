## is-version

Is this value a Node.js version?

```
var assert = require('assert');
var isVersion = require('is-version');

// true
assert.ok(isVersion('12.0.1'));
assert.ok(isVersion('0.0.0'));
assert.ok(isVersion('v12.0.1', 'v')); // with prefix
assert.ok(isVersion('v0.0.0', 'v')); // with prefix

// false
assert.ok(!isVersion('12'));
assert.ok(!isVersion('12.0'));
assert.ok(!isVersion('12.0.1', 'v')); // with prefix
assert.ok(!isVersion('0.0.0', 'v')); // with prefix
assert.ok(!isVersion('v12.0.1'));
assert.ok(!isVersion('v0.0.0'));
assert.ok(!isVersion('v12'));
assert.ok(!isVersion('v12.0'));
assert.ok(!isVersion('va.0.1'));
assert.ok(!isVersion('v12a.0.1'));
assert.ok(!isVersion('v12.b.1'));
assert.ok(!isVersion('v12.0b.1'));
assert.ok(!isVersion('v12.0.c'));
assert.ok(!isVersion('v12.0.1c'));
```
