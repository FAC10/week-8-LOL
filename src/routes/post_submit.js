const post_joke = require('../post_joke');

module.exports = {
  method: 'POST',
  path: '/post/submit',
  handler: (request, reply) => {
    post_joke('Oli', request.payload.joke, (err, res) => {
      if (err) console.log(err);
      return reply.redirect('/');
    })

  }
}
