/* eslint no-param-reassign: ["error", { "props": false }]*/
const getData = require('./../get_data');

module.exports = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    getData((err, jokes) => {
      if (err) {
        const options = { message: 'Something went wrong, sorry!' };
        return reply.view('index', options);
      }
      const options = { jokes };
      if (req.auth.isAuthenticated) {
        options.credentials = req.auth.credentials;
        jokes.forEach((joke) => {
          if (joke.username === req.auth.credentials.username) {
            joke.self = true;
          }
        });
      }
      return reply.view('index', options);
    });
  },

};
