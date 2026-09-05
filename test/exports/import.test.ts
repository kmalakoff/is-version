import assert from 'assert';
import isVersion from 'is-version';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof isVersion, 'function');
  });
});
