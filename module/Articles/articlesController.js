const express = require('express');
const router = express.Router()
const Article = require('./Articles');
const Categories = require('../Category/Categories');
const slugify = require('slugify');

router.get("/admin/articles",(req,res) => {
    Article.findAll({
        include : [{model:Categories}]
    }).then((articles) => {
        res.render("admin/articles/index",{
            articles : articles
        })
    })
})