const mysql = require('mysql2');

const Pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'root',
  database: 'todo',
  waitForConnections: true,
  queueLimit: 0,
  connectionLimit: 10
})

module.exports = Pool;