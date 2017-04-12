const queryString = require('querystring');
const request = require('request');

module.exports = {
  method: 'GET',
  path: '/welcome',
  handler: (req, reply) => {
    const code = req.url.query.code;

    const url = `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`;

    request.post(url, (err, res, body) => {
      const parsed = queryString.parse(body);
      const accessToken = parsed.access_token;
      console.log(accessToken);
      reply.redirect('/');
    });
  },
};
