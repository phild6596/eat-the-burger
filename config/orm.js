const connection = require('../config/connection.js');

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
    
    for (var key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + '=' + ob[key]);
        }
    }
    return arr.toString();
}

let orm = {
    all: function(tableInput, cb) {
        let queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function (err, result){
            if (err){
                throw err;
                console.log("Error: " + err);
            }
            cb (result);
        });
    },
    create: function (table, cols, vals, cb) {
        let queryString = 'INSERT INTO ' + table;
        queryString += '(';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
                console.log("Error: " + err);
            }
            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        let queryString = 'UPDATE ' + table;
        queryString += ' Set ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err){
                throw err;
                console.log('Error: ' + err);
            }
            cb(result);
        });
    }
};

module.exports = orm;