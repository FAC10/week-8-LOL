const get = require('./../handler_home');

module.exports = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    get((err, jokes) => {
      if (err) {
        return reply.redirect('Something went wrong sorry!');
      }
      const options = { jokes }
      if (req.auth.isAuthenticated) {
        options.credentials = req.auth.credentials;
      }
      reply.view('index', options);
    });
  }

}

//

// const get = require('./../database/get');
//
// module.exports = {
//   method: 'GET',
//   path: '/',
//   handler: (req, reply) => {
//     get.articles((err, articles) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       // console.log(articles);
//       reply.view('index', {articles:articles, isAuthenticated:true});
//     });
//   },
// };
