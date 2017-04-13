const connect = require('../database/db_connection');

const delete_joke = (id, cb) => {
  connect.query(
    `DELETE FROM jokes
    WHERE jokes.id = ${id}`,
    (err) => {
      if (err) return cb(err);
      return cb(null);
    });
};

module.exports = delete_joke;
