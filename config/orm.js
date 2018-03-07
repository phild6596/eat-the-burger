const connection = require('../config/connection.js');

function printQuestionMarks(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push['?'];
    }
    return arr.toString();
}

function objToSql(ob) {
    let arr = [];
    for (let key in ob) {
        if (Object.hasOwntProperty.call(ob, key)){
            arr.push(key + '=' + ob[key]);
        }
    }
    return arr.toString();
}