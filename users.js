var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all", function(req, res) {
    db.Users.findAll()
        .then( users => {
            res.status(200).send(JSON.stringify(users));
        })
        .catch( err => {
            console.log(JSON.stringify(err));
            res.status(500).send("error occurred!");
        });
});

router.get("/:id", function(req, res) {
    db.Users.findByPk(req.params.id)
        .then( user => {
            res.status(200).send(JSON.stringify(user));
        })
        .catch( err => {
            console.log(JSON.stringify(err));
            res.status(500).send("error occurred!");
        });
});

router.put("/", function(req, res) {
    
    db.Users.create({
        Name: req.body.name,
        Email : req.body.email,
        Password : req.body.password
        })
        .then( user => {
            res.status(200).send(JSON.stringify(user));
        })
        .catch( err => {
            console.log(JSON.stringify(err));
            res.status(500).send("error occurred!");
        });
});

router.delete("/:id", function(req, res) {
    db.Users.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            console.log(JSON.stringify(err));
            res.status(500).send("error occurred!");
        });
});

module.exports = router;