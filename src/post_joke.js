const connect = require('../database/db_connection');

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
  return connect.query(queryJoke, (err, res) => {
    if (err) return cb(err);
    return cb(null);
  });
};

const postJoke = (username, joke, cb) => {
  getUserID(username, (err, res) => {
    if (err) return insertJoke(err);
    return insertJoke(null, res, joke, cb);
  });
};

module.exports = postJoke;
