const knex = require('knex');

const dbConnection = async () => {
    console.log("Base de datos conectada");
}

module.exports = {dbConnection};