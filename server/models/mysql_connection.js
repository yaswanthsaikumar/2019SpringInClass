const mysql = require('mysql');
              require('dotenv').load();

const conn = mysql.createPool({
    host: process.env.MySQL_HOST,
    user: process.env.MySQL_USER,
    password: process.env.MySQL_PASS,
    databse: process.env.MySQL_DB,
    connectionLimit: 10
});


module.exports = conn;
