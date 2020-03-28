const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;//? if : else

const connection = knex(config); //padrão de conexão do package.jason

module.exports = connection;