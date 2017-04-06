const connect = require('../database/db_connection');

const postJoke = (username, joke, cb) => {
  getUserID(username, (err, res) => {
    if (err) insertJoke(err);
    insertJoke(null, res, joke, cb);
  });
};

const getUserID = (username, cb) => {
  const queryUser = `SELECT users.id FROM users WHERE users.username = '${username}';`;
  connect.query(queryUser, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows[0].id);
  })
};

const insertJoke = (err, userID, joke, cb) => {
  if (err) return cb(err);
  const queryJoke = `INSERT INTO jokes (author_id, body) VALUES (${userID}, '${joke}');`;
  connect.query(queryJoke, (err, res) => {
    if (err) return cb(err);
    cb(null);
  })
}

module.exports = postJoke;
