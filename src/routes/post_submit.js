const postJoke = require('../postJoke');

module.exports = {
  method: 'POST',
  path: '/post/submit',
  handler: (request, reply) => {
    postJoke('Oli', request.payload.joke, (err, res) => {
      if (err) console.log(err);
      return reply.redirect('/');
    })

  }
}
