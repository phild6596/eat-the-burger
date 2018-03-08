const express = require('express');
const router = express.Router();

const burger = require ('../models/burger.js');

router.get('/', function (req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
})
 router.post('/', function (req, res) {
     burger.create([
         'burger_name', 'devoured'
     ], [
         req.body.burger_name, req.body.devoured
     ], function(){
         res.redirect('/');
     });
 })