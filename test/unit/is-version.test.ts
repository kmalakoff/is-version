import assert from 'assert';

// @ts-ignore
import isVersion from 'is-version';

describe('is-version', () => {
  describe('happy path', () => {
    it('12.0.1', () => {
      assert.ok(isVersion('12.0.1'));
    });
    it('0.0.0', () => {
      assert.ok(isVersion('0.0.0'));
    });
    it('v12.0.1', () => {
      assert.ok(isVersion('v12.0.1', 'v'));
    });
    it('v0.0.0', () => {
      assert.ok(isVersion('v0.0.0', 'v'));
    });
  });

  describe('unhappy path', () => {
    it('12 number', () => {
      assert.ok(!isVersion(12 as unknown as string));
    });
    it('12', () => {
      assert.ok(!isVersion('12'));
    });
    it('0 number', () => {
      assert.ok(!isVersion(0 as unknown as string));
    });
    it('0', () => {
      assert.ok(!isVersion('0'));
    });
    it('12.0', () => {
      assert.ok(!isVersion('12.0'));
    });
    it('0.0', () => {
      assert.ok(!isVersion('0.0'));
    });
    it('12.0.1', () => {
      assert.ok(!isVersion('12.0.1', 'v'));
    });
    it('0.0.0', () => {
      assert.ok(!isVersion('0.0.0', 'v'));
    });
    it('v12.0.1', () => {
      assert.ok(!isVersion('v12.0.1'));
    });
    it('v0.0.0', () => {
      assert.ok(!isVersion('v0.0.0'));
    });
    it('v12', () => {
      assert.ok(!isVersion('v12'));
    });
    it('v12.0', () => {
      assert.ok(!isVersion('v12.0'));
    });
    it('va.0.1', () => {
      assert.ok(!isVersion('va.0.1'));
    });
    it('v12a.0.1', () => {
      assert.ok(!isVersion('v12a.0.1'));
    });
    it('v12.b.1', () => {
      assert.ok(!isVersion('v12.b.1'));
    });
    it('v12.0b.1', () => {
      assert.ok(!isVersion('v12.0b.1'));
    });
    it('v12.0.c', () => {
      assert.ok(!isVersion('v12.0.c'));
    });
    it('v12.0.1c', () => {
      assert.ok(!isVersion('v12.0.1c'));
    });
  });
});
