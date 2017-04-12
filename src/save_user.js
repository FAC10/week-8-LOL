const connect = require('./../database/db_connection.js');

const saveUserData = (userData, cb) => {
  const query =
  `INSERT INTO users (github_id, username, pic, name)
  VALUES ('${userData.id}', '${userData.username}', '${userData.pic}', '${userData.name}')
  ON CONFLICT (github_id)
  DO UPDATE SET
  username = excluded.username,
  pic = excluded.pic,
  name = excluded.name;`;
  connect.query(query, (err) => {
    if (err) return cb(err);
    return cb(null);
  });
};

module.exports = saveUserData;
