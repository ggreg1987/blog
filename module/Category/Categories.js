const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Categories = connection.define("categories", {
    title : {
        type : Sequelize.STRING,
        allowNull : false
    },

    slug : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

Categories
    .sync({force:false})
    .then(() => {
        console.log("Categoria criada com sucesso")
    }).catch((err) => {
        console.log(`Erro ao criar a tabela Categories  ${err}`)
});

module.exports = Categories;