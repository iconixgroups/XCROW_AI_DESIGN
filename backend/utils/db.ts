import mysql from 'mysql';
import dbConfig from '../database/dbConfig.js';

const db = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

db.connect((error: Error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;