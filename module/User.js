const Sequelize = require('sequelize');
const connection = require('../database/database');

const User = connection.define("user",{
    username : {
        type : Sequelize.STRING,
        allowNull: false
    },

    password : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

