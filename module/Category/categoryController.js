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