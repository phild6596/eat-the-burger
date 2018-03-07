const orm = require('../config/orm.js');

let burger = {
    all: function (cb) {
        orm.all('burgers', function(res){
            cb(res);
        })
    },
    create: function (cols, vals, cb) {
        orm.create('burgers', cols, vals, function(res){
            cb(res);
        });
    },
    update: function
}