const Sequelize = require('sequelize');
const connection = new Sequelize("blog","greg","12345", {
    host : "localhost",
    dialect : "mysql",
    timezone : "-03:00"
});