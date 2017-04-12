const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const fs = require('fs');
const hbs = require('handlebars');
const cookieAuth = require('hapi-auth-cookie');

const routes = require('./routes');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 3000,
});

server.register([inert, vision, cookieAuth], (err) => {
  if (err) throw err;

  const options = {
    password: process.env.COOKIE_SECRET,
    cookie: 'cookie-name',
    isSecure: process.env.NODE_ENV === 'production',
    ttl: null,
    isSameSite: false,
  };
  server.auth.strategy('base', 'cookie', 'optional', options);

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
