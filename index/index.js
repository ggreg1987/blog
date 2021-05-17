const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const session = require('express-session');
const connection = require('../database/database');

app.set('view engine','ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({secret:"hardSecrety", cookie : {maxAge : 36000000}}))

app.listen(9090,() => {
    console.log("O servidor subiu na porta 9090")
})