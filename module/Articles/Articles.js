const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Articles = connection.define("articles",{
    title : {
        type : Sequelize.STRING,
        allowNull: false
    },
    body : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    slug : {
        type : Sequelize.STRING,
        allowNull: false
    }
})

