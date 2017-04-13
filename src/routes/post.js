module.exports = {
  method: 'GET',
  path: '/post',
  config: {
    auth: 'base',
  },
  handler: (req, reply) => {
    const options = { };
    if (req.auth.isAuthenticated) {
      options.credentials = req.auth.credentials;
    }
    return reply.view('post', options);
  },
};
