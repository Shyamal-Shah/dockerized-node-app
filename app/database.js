const knex = require('knex');

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'postgres',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres',
  },
});
