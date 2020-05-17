var assert = require('assert');

var isVersion = require('../..');

describe('is-version', function () {
  describe('happy path', function () {
    it('v12.0.1', function () {
      assert.ok(isVersion('v12.0.1'));
    });
    it('v0.0.0', function () {
      assert.ok(isVersion('v0.0.0'));
    });
  });

  describe('unhappy path', function () {
    it('12', function () {
      assert.ok(!isVersion('12'));
    });
    it('0', function () {
      assert.ok(!isVersion('0'));
    });
    it('12.0', function () {
      assert.ok(!isVersion('12.0'));
    });
    it('0.0', function () {
      assert.ok(!isVersion('0.0'));
    });
    it('12.0.1', function () {
      assert.ok(!isVersion('12.0.1'));
    });
    it('0.0.0', function () {
      assert.ok(!isVersion('0.0.0'));
    });
    it('v12', function () {
      assert.ok(!isVersion('v12'));
    });
    it('v12.0', function () {
      assert.ok(!isVersion('v12.0'));
    });
    it('va.0.1', function () {
      assert.ok(!isVersion('va.0.1'));
    });
    it('v12a.0.1', function () {
      assert.ok(!isVersion('v12a.0.1'));
    });
    it('v12.b.1', function () {
      assert.ok(!isVersion('v12.b.1'));
    });
    it('v12.0b.1', function () {
      assert.ok(!isVersion('v12.0b.1'));
    });
    it('v12.0.c', function () {
      assert.ok(!isVersion('v12.0.c'));
    });
    it('v12.0.1c', function () {
      assert.ok(!isVersion('v12.0.1c'));
    });
  });
});
