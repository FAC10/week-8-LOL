module.exports = {
  method: 'GET',
  path: '/login/submit',
  handler: (request, reply) => {
    return reply.view('index');
  }
}
