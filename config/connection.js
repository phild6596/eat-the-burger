const mysql = require('mysql');


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    port: 3306,
    host:'localhost',
    user: 'basicUser',
    password: "#Password1234",
    database: 'burgers_db'  
});
};

connection.connect(function(err) {
    if (err) {
        throw err;
        console.log("Error: " + err.stack);
        return;
    }
    console.log("Connected with: " + connection.threadId);
});

module.exports = connection;