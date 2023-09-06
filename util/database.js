const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    database:'nodjs_learning',
    password:'admin',
    port:5000
})


module.exports = pool.promise();