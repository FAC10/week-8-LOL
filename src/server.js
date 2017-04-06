const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const hbs = require('handlebars');

const routes = require('./routes');

const server = new hapi.Server();

server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
});

server.register([inert, vision], (err) => {
  if (err) throw err;
  server.route(routes);
});

server.views({
  engines: { hbs },
  path: 'views',
  layout: 'default',
  layoutPath: 'views/layouts',
  partialsPath: 'views/partials',
});

module.exports = server;
