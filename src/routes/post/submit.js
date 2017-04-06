module.exports = {
  method: 'GET',
  path: '/post/submit',
  handler: (request, reply) => {
    return reply.view('index');
  }
}
