import pg from 'pg';

import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const dbConfig = {
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  port: 5432,
  database: 'parsingdata_20220422',
};

const dbConnection = new Pool(dbConfig);

export default dbConnection;
