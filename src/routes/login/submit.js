module.exports = {
  method: 'POST',
  path: '/login/submit',
  handler: (request, reply) => {
    return reply.view('index');
  }
}
