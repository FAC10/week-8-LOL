module.exports = {
  method: 'POST',
  path: '/post/submit',
  handler: (request, reply) => {
    console.log(request.payload.joke);
    return reply.view('post');
  }
}
