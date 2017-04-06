module.exports = {
  method: 'Post',
  path: '/login/submit',
  handler (request, reply) {
    console.log(request.payload.username, request.payload.password);
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
