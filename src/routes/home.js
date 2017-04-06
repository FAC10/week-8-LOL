const get = require('./../handler_home');

module.exports = {

  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    get((err, jokes) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(jokes);
      reply.view('index', {jokes:jokes, isAuthenticated:true});
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
