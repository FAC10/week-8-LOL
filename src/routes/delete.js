const deleteJoke = require('./../delete_joke.js');

module.exports = {
  path: '/delete/{username}/{id}',
  method: 'GET',
  config: {
    auth: 'base',
  },
  handler: (req, reply) => {
    if (req.auth.credentials.username !== req.params.username) {
      return reply.redirect('/');
    }
    return deleteJoke(req.params.id, (err) => {
      if (err) {
        return reply('Something went wrong, sorry!');
      }
      return reply.redirect('/');
    });
  },
};
