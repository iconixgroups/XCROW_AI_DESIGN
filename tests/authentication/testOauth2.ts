import { assert } from 'assert';
import { authenticate, getToken, validateToken } from '../../authentication/oauth2';

describe('OAuth2 Authentication', function() {
  describe('#authenticate()', function() {
    it('should authenticate user without error', function(done) {
      authenticate('username', 'password', function(err, user) {
        if (err) done(err);
        assert.equal(user.username, 'username');
        done();
      });
    });
  });

  describe('#getToken()', function() {
    it('should get token without error', function(done) {
      getToken('username', 'password', function(err, token) {
        if (err) done(err);
        assert.ok(token);
        done();
      });
    });
  });

  describe('#validateToken()', function() {
    it('should validate token without error', function(done) {
      validateToken('token', function(err, valid) {
        if (err) done(err);
        assert.equal(valid, true);
        done();
      });
    });
  });
});