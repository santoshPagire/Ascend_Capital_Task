const mysql=require("mysql2");

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'mysql',
    database: 'signup'
   
})
module.exports = db;