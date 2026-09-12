const assert = require('assert');
const isVersion = require('is-version');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof isVersion, 'function');
  });
});
