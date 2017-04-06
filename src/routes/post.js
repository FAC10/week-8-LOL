module.exports = {
  method: 'GET',
  path: '/post',
  handler: (request, reply) => {
    return reply.view('index');
  }
}
