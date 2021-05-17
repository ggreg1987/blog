const express = require('express');
const router = express.Router();
const Categories = require('./Categories');
const slugify = require('slugify');

router.get("/admin/categories",(req,res) => {
    Categories.findAll().then((categories) => {
        res.render("admin/categories/index", {
            categories : categories
        })
    })
})

router.get("/admin/categories/new",(req,res) => {
    res.render("admin/categories/new")
})

router.post("/category/save",(req,res) => {
    let title = req.body.title;
    if(title != undefined) {
        Categories.create({
            title : title,
            slug : slugify(title)
        }).then(() => {
            res.redirect("/admin/categories")
        })
    }
})

router.post("/admin/categories/edit/:id",(req,res) => {
    let id = req.params.id;
    if(id != undefined && !isNaN(id)) {
        Categories.findByPk(id).then(categories => {
            res.render("admin/categories/edit",{
                categories : categories
            })
        })
    } else {
        res.redirect("/admin/categories")
    }
})

router.post("/category/update", (req,res) => {
    let id = req.body.id;
    let title = req.body.title;

    if(title != undefined) {
        Categories.update({
            title : title,
            slug : slugify(title)
        },
        {
            where : {id : id}
        }).then(() => {
            res.redirect("/admin/categories")
        })
    } else {
        res.redirect("/admin/categories/edit")
    }
})