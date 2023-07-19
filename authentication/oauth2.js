const oauth2 = require('simple-oauth2').create({
  client: {
    id: process.env.CLIENT_ID,
    secret: process.env.CLIENT_SECRET,
  },
  auth: {
    tokenHost: process.env.TOKEN_HOST,
    authorizePath: process.env.AUTHORIZE_PATH,
    tokenPath: process.env.TOKEN_PATH
  }
});

async function getAccessTokenFromAuthorizationCode(code) {
  const { token } = await oauth2.authorizationCode.getToken({
    code,
    redirect_uri: process.env.REDIRECT_URI,
    scope: process.env.SCOPE
  });

  return oauth2.accessToken.create(token);
}

async function refreshAccessToken(refreshToken) {
  const { token } = await oauth2.accessToken.create({ refresh_token: refreshToken }).refresh();
  return oauth2.accessToken.create(token);
}

module.exports = {
  getAccessTokenFromAuthorizationCode,
  refreshAccessToken
};