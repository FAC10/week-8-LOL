const getUsers = require('../handler_home.js');

module.exports = {
  method: 'Post',
  path: '/login/submit',
  handler (request, reply) {
    console.log(request.payload.username, request.payload.password);
    var username = request.payload.username;
    var password = request.payload.password;
    console.log(username);

    getUsers.getUsers(username, password, (err, res) => {

  if (err) {

    reply.view('index', { message: err.message });
  }
  else if (res.length) {

      request.cookieAuth.set({ username });
      reply.redirect('/');

  }
});

    //compare details to database

  }
}
