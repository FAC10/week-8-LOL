const get = require('./../handler_home');

module.exports = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    get.getData((err, jokes) => {
      if (err) {
        return reply.redirect('Something went wrong sorry!');
      }
      const options = { jokes }
      if (req.auth.isAuthenticated) {
        options.credentials = req.auth.credentials;
      }
      reply.view('index', options);
    });
  }

}
