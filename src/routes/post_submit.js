const postJoke = require('../post_joke');

module.exports = {
  method: 'POST',
  path: '/post/submit',
  config: {
    auth: 'base',
  },
  handler: (request, reply) => {
    postJoke(request.auth.credentials.username, request.payload.joke, (err) => {
      if (err) {
        const options = { message: 'Something went wrong, sorry!' };
        return reply.view('index', options);
      }
      return reply.redirect('/');
    });
  },
};
