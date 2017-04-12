const post_joke = require('../post_joke');

module.exports = {
  method: 'POST',
  path: '/post/submit',
  handler: (request, reply) => {
    post_joke(request.auth.credentials.username, request.payload.joke, (err, res) => {
      if (err) {
        return reply('Something went wrong sorry!');
      }

      return reply.redirect('/');
    });
  },
};
