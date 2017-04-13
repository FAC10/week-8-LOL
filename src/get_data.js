const dbConnection = require('../database/db_connection.js');

const getData = (cb) => {
  dbConnection.query(
      `SELECT
      jokes.id, jokes.body, jokes.author_id, users.username, users.pic, users.name
      FROM jokes
      INNER JOIN users
      ON jokes.author_id = users.id`,
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    });
};

module.exports = getData;
