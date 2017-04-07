const dbConnection = require('../database/db_connection.js');


const getData = (cb) => {
    dbConnection.query('SELECT * FROM jokes INNER JOIN users ON jokes.author_id = users.id', (err, res) => {
        if (err) cb(err);
        cb(null, res.rows);
    });
};


const getUsers = (inputUsername, inputPassword, cb) => {
  const unacceptableInput = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (unacceptableInput.test(inputUsername)
    || unacceptableInput.test(inputPassword)){
    cb(Error('Incorrect username'));
  }
  dbConnection.query(`SELECT * FROM users WHERE username = '${inputUsername}' AND password = '${inputPassword}'`, (err, res) => {
    if (err){
      cb(err);
    } else if (res.rows.length === 0) {
     cb(Error('a username doesnt exist'));
    }
    cb(null, res.rows);
  });
};

module.exports = {getData:getData,
              getUsers:getUsers};
