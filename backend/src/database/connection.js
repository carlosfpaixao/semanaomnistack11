// Importar knex
const knex = require('knex');
// Importar arquivode configuraçãodo knex
const configuration = require('../../knexfile');
// recuperar dados conexão
const connection = knex(configuration.development);
// exportar conexão
module.exports = connection;