module.exports = {
  method: 'GET',
  path: '/login',
  handler: (request, reply) => {
    return reply.view('index');
  }
}
