module.exports = {
  method: 'Post',
  path: '/login/submit',
  handler (request, reply) {
    console.log(request.payload.username, request.payload.password);
    var username = request.payload.username;
    var password = request.payload.password;
    console.log(username);
    //compare details to database
    if (username == "baloon" && password == "baloon") {
      console.log('inside the loop')
    request.cookieAuth.set({
    username: "example"});
    reply.redirect('/')
    };
  }
}
