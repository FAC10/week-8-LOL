const hapi = require('hapi');
const inert = require('inert');
const vision = require('vision');
const fs = require('fs');
const hbs = require('handlebars');
const cookieAuth = require('hapi-auth-cookie');


const routes = require('./routes');

const server = new hapi.Server();

server.connection({
  // host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  tls: process.env.NODE_ENV !== 'production' && {
    key: fs.readFileSync('./keys/key.pem'),
    cert: fs.readFileSync('./keys/cert.pem'),
  },
});

server.register([inert, vision, cookieAuth], (err) => {
  if (err) throw err;

  const options = {
    password: 'Iamatemporarypasswordofover32characterssothatwecangetcookiesworking',
    cookie: 'cookie-name',
    isSecure: false,
    ttl: 2 * 60 * 60000,
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
