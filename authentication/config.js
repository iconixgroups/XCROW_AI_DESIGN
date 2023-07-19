const oauth2 = require('simple-oauth2').create({
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  },
  auth: {
    tokenHost: process.env.TOKEN_HOST,
    tokenPath: process.env.TOKEN_PATH,
    authorizePath: process.env.AUTHORIZE_PATH,
  },
});

const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: process.env.REDIRECT_URI,
  scope: process.env.SCOPE,
  state: process.env.STATE,
});

module.exports = {
  oauth2,
  authorizationUri,
};