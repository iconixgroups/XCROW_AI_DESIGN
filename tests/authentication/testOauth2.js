const assert = require('assert');
const oauth2 = require('../../authentication/oauth2');

describe('OAuth2 Authentication', function() {
  describe('#authenticate()', function() {
    it('should authenticate user without error', function(done) {
      oauth2.authenticate('username', 'password', function(err, user) {
        if (err) done(err);
        assert.equal(user.username, 'username');
        done();
      });
    });
  });

  describe('#getToken()', function() {
    it('should get token without error', function(done) {
      oauth2.getToken('username', 'password', function(err, token) {
        if (err) done(err);
        assert.ok(token);
        done();
      });
    });
  });

  describe('#validateToken()', function() {
    it('should validate token without error', function(done) {
      oauth2.validateToken('token', function(err, valid) {
        if (err) done(err);
        assert.equal(valid, true);
        done();
      });
    });
  });
});