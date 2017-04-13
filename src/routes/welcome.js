const queryString = require('querystring');
const request = require('request');
const saveUserData = require('./../save_user.js');

module.exports = {
  method: 'GET',
  path: '/welcome',
  handler: (req, reply) => {
    if (req.auth.isAuthenticated) {
      return reply.redirect('/');
    }
    const code = req.url.query.code;
    const url = `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`;
    request.post(url, (err, res, body) => {
      const parsed = queryString.parse(body);
      const accessToken = parsed.access_token;
      const headers = {
        'User-Agent': 'oauth_github_lol',
        Authorization: `token ${accessToken}`,
      };
      const urlUser = 'https://api.github.com/user';
      request.get({ url: urlUser, headers }, (err, res, body) => {
        if (err) console.log(err);
        const parsedBody = JSON.parse(body);
        const userData = {
          id: parsedBody.id,
          username: parsedBody.login,
          name: parsedBody.name,
          pic: parsedBody.avatar_url,
        };
        req.cookieAuth.set({
          accessToken,
          name: userData.name,
          pic: userData.pic,
          username: userData.username,
        });
        saveUserData(userData, (err) => {
          if (err) console.log(err);
          reply.redirect('/');
        });
      });
    });
  },
};
