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

router.post("/admin/articles/edit/:id",(req,res) => {
    let id = req.params.id;

    if(id != undefined && !isNaN(id)) {
        Article.findByPk(id).then(articles => {
            Categories.findAll().then(categories => {
                res.render("admin/articles/edit", {
                    articles : articles,
                    categories : categories
                })
            })
        })
    } else {
        res.redirect("/admin/articles/edit")
    }
})

router.post("/articles/update", (req,res => {
    let id = req.body.id;
    let title = req.body.title;
    let body = req.body.body;
    let category = req.body.category;

    Article.update({
        title : title,
        body : body,
        slug : slugify(title),
        categoryId : category
    },
    {
        where : {id : id}
    }).then(() => {
        res.redirect("/admin/articles")
    })
}))

router.post("/articles/delete", (req,res) => {
    let id = req.body.id
    if(id != undefined && !isNaN(id)) {
        Article.destroy({
            where : {id : id}
        }).then(() => {
            res.redirect("/admin/articles")
        }).catch((err) => {
            res.redirect("/admin/articles")
        });
    } else {
        res.redirect("/admin/articles")
    }
})

module.exports = router