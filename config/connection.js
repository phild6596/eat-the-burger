const mysql = require('mysql');


const connection = mysql.createConnection({
    port: 3306,
    host:'localhost',
    user: 'basicUser',
    password: "#Password1234",
    database: 'burgers_db'  
});

connection.connect(function(err) {
    if (err) {
        console.log("Error: " + err);
        return;
    }
    console.log("Connected with: " + connection.threadId);
});

