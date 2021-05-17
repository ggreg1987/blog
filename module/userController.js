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
            let correctPassword = bcrypt.compareSync(user.password,hash)

            if(correctPassword) {
                User.create({
                    username : username,
                    password : hash
                }).then(() => {
                    res.redirect("/admin/category")
                })
            } else {
                res.redirect("/amin/user/create")
            }
        }
    })
})
