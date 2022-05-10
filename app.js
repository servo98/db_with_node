import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const connection = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const query = connection('film').where('release_year', 2006);

query.then((rows) => {
  console.log(rows);
});
