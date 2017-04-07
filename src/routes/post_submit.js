const post_joke = require('../post_joke');

module.exports = {
  method: 'POST',
  path: '/post/submit',
  handler: (request, reply) => {
<<<<<<< HEAD
    postJoke('Oli', request.payload.joke, (err, res) => {
      if (err) {
        return reply.redirect('Something went wrong sorry!');
      }
      else {
=======
    post_joke('Oli', request.payload.joke, (err, res) => {
      if (err) console.log(err);
>>>>>>> 24b702a8e296b475133c1718c916342a45169314
      return reply.redirect('/');
      }
    })

  }
}
