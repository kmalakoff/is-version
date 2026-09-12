import assert from 'assert';
import isVersion from 'is-version';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof isVersion, 'function');
  });
});
