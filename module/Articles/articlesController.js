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

router.get("/admin/articles/new",(req,res) => {
    res.render("admin/articles/new")
})

router.post("/articles/save",(req,res) => {
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.caregory

    if(title != null && title != undefined) {
        Article.create({
            title : title,
            body : body,
            slug : slugify(title),
            categoryId : category
        }).then(()=> {
            res.redirect("/admin/articles")
        })
    } else {
        res.redirect("/admin/articles/new")
    }
   
})