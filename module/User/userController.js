const express = require('express');
const router = express.Router();
const User = require('./User');
const bcrypt = require('bcryptjs');



router.get("/admin/user/create",(req,res) => {
    res.render("admin/user/create")
})

router.post("/usersave", (req,res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({where: {username : username}}).then((user) => {
        if(user == undefined) {

            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password,salt);
                      
                User.create({
                    username : username,
                    password : hash
                }).then(() => {
                    res.redirect("/admin/category")
                }).catch((err) => {
                    res.redirect("/login")
                })            
        }
    })
})

router.post("/authenticate",(req,res) => {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({where: {username : username}}).then(user => {
        if(user != undefined) {
    
            let correctPassword = bcrypt.compareSync(password, user.password);

            if(correctPassword) {
                req.session.user = {
                    id : user.id,
                    username : user.username
                }
            } else {
                res.redirect("/login")
            }
        } else {
            res.redirect("/login")
        }
    })
})

module.exports = router;