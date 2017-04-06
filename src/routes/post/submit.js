module.exports = {
  method: 'POST',
  path: '/post/submit',
  handler: (request, reply) => {
    return reply.view('index');
  }
}
