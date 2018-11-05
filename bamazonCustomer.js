// require('dotenv').config();
const mysql = require('mysql');
const cTable = require("console.table");
console.log(process.env);


const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'bamazon',
});

connection.connect((err) => {
    if(err) throw(err);
    connection.query("SELECT * FROM products", function(err, response){
        console.table(response);
    })
    console.log(`connected as id ${connection.threadId}`);
});