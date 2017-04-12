const connect = require('../database/db_connection');

const post_joke = (username, joke, cb) => {
  getUserID(username, (err, res) => {
    if (err) return insertJoke(err);
    insertJoke(null, res, joke, cb);
  });
};

const getUserID = (username, cb) => {
  const queryUser = `SELECT users.id FROM users WHERE users.username = '${username}';`;
  connect.query(queryUser, (err, res) => {
    if (err) return cb(err);
    return cb(null, res.rows[0].id);
  });
};

const insertJoke = (err, userID, joke, cb) => {
  if (err) return cb(err);
  const queryJoke = `INSERT INTO jokes (author_id, body) VALUES (${userID}, '${joke}');`;
  connect.query(queryJoke, (err, res) => {
    if (err) return cb(err);
    return cb(null);
  });
};

module.exports = post_joke;
