module.exports = {
  method: 'Post',
  path: '/login',
  handler (request, reply) {
    var username = request.payload.username;
    var password = request.payload.password;
    //compare details to database
    request.cookieAuth.set({
    username: "example"});
    reply.view('index', {
      credentials: request.auth.credentials
    });
  }
}
