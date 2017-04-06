const test = require('tape');

const server = require('../src/server');
// const router = require('../src/routes');

const routes = {
  home: [
    {
      method: 'GET',
      url: '/',
    },
    {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    },
  ],
  login: [
    {
      method: 'GET',
      url: '/login',
    },
    {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    },
  ],
  // loginSubmit: [
  //   {
  //     method: 'POST',
  //     url: '/login/submit',
  //   },
  //   {
  //     statusCode: 200,
  //     headers: { 'Content-Type': 'text/html; charset=utf-8' },
  //   },
  // ],
  post: [
    {
      method: 'GET',
      url: '/post',
    },
    {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    },
  ],
  // submitPost: [
  //   {
  //     method: 'POST',
  //     url: '/post/submit',
  //   },
  //   {
  //     statusCode: 200,
  //     headers: { 'Content-Type': 'text/html; charset=utf-8' },
  //   },
  // ],
  css: [
    {
      method: 'GET',
      url: '/style.css',
    },
    {
      statusCode: 200,
      headers: { 'Content-Type': 'text/css; charset=utf-8' },
    },
  ],
  fakeCSS: [
    {
      method: 'GET',
      url: '/fakecss.css',
    },
    {
      statusCode: 404,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    },
  ],
  injection: [
    {
      method: 'GET',
      url: '/public/../src/server.js',
    },
    {
      statusCode: 404,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    },
  ],
  random: [
    {
      method: 'GET',
      url: '/hgvhp',
    },
    {
      statusCode: 404,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    },
  ],
};

Object.keys(routes).forEach((route) => {
  test(`Testing ${route} route`, (t) => {
    server.inject(routes[route][0], (res) => {
      const expectedStatusCode = routes[route][1].statusCode;
      const expectedHeaders = routes[route][1].headers['Content-Type'];
      t.equal(expectedStatusCode, res.statusCode, `"${res.statusCode}" should be "${expectedStatusCode}" `);
      t.equal(expectedHeaders, res.headers['content-type'], `"${res.headers['content-type']}" should be "${expectedHeaders}" `);
      t.end();
    });
  });
});
