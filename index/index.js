const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine','ejs');
app.use(express.static('public'))

app.listen(9090,() => {
    console.log("O servidor subiu na porta 9090")
})