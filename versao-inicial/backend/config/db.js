const config = require('../knexfile.js')
const knex = require('knex')(config)

// knex.migrate.latest([config]) meio ruim, mas talvez não 
module.exports = knex