const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const session = require('express-session');
const connection = require('../database/database');
const User = require('../module/User/User');
const userController = require('../module/User/userController');

connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco realizada com sucesso!")
    }).catch((err) => {
        console.log(`Erro ao conectar-se com o banco: ${err}`)
    });

app.set('view engine','ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(session({secret:"hardSecrety", cookie : {maxAge : 36000000}}))
app.use("/",userController)


app.listen(9090,() => {
    console.log("O servidor subiu na porta 9090")
})