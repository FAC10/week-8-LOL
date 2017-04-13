const connect = require('../database/db_connection');

const deleteJoke = (id, cb) => {
  connect.query(
    `DELETE FROM jokes
    WHERE jokes.id = ${id}`,
    (err) => {
      if (err) return cb(err);
      return cb(null);
    });
};

module.exports = deleteJoke;
