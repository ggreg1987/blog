const Sequelize = require('sequelize');
const connection = require('../../database/database');
const Categories = require('../Category/Categories');

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

Categories.hasMany(Articles);
Articles.belongsTo(Categories);

Articles.sync({force:false})
    .then(() => {
        console.log("Articles criado com sucesso")   
    }).catch((err) => {
        console.log(`Erro ao criar articles: ${err}`)
    });

module.exports = Articles