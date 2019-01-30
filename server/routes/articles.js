'use strict';
var express = require('express');
var router = express.Router();

const Article = require("../api/articles");
/* GET users listing. */
router.get('/', function (req, res) {    
    Article.find().exec().then(docs => {
        res.status(200).json(docs);
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err);
    })   
});

router.post('/', function (req, res) {
    var art = new Article({
        name : req.body.name,
        summery : req.body.summery,
        body : req.body.body,
        user : req.body.user,
        url : req.body.url
    });
    art.save().then((r) => {
        res.status(200).json(r);
    }, (e) => {
        res.status(400).send(e);
    });       
});

module.exports = router;
