const express = require('express');
const router = express.Router();
const User = require('./User');
const bcrypt = require('bcryptjs');
const slugify = require('slugify');


router.get("/admin/user/create",(req,res) => {
    res.render("admin/user/create")
})


