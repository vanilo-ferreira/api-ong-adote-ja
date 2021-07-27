const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'ec2-52-72-125-94.compute-1.amazonaws.com',
    user: 'qulxzosjrxaaim',
    password: 'fa6799e152ec2daf05b7a5c9ead4173da09e8d42c9cb7a59008d45d3a80b3694',
    database: 'd3shpkuerga8ia',
    port: 5432,
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = knex;