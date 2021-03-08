const mysql      = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'react_drink',
  multipleStatements: true
});



module.exports = connection;