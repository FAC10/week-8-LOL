const delete_joke = require('./../delete_joke.js');

module.exports = {
  path: '/delete/{username}/{id}',
  method: 'GET',
  handler: (req, reply) => {
    if (req.auth.credentials.username !== req.params.username) {
      return reply.redirect('/');
    }
    delete_joke(req.params.id, (err) => {
      if (err) {
        return reply('Something went wrong, sorry!');
      }
      return reply.redirect('/');
    });
  },
};
