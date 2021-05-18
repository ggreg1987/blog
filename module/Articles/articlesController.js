const express = require('express');
const router = express.Router()
const Article = require('./Articles');
const Categories = require('../Category/Categories');
const slugify = require('slugify');