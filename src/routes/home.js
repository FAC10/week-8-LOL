const get = require('./../handler_home');

module.exports = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    get.getData((err, jokes) => {
      if (err) {
        console.log(err);
        return;
      }
      const options = { jokes }
      if (req.auth.isAuthenticated) {
        options.credentials = req.auth.credentials;
      }
      reply.view('index', options);
    });
  }

}
