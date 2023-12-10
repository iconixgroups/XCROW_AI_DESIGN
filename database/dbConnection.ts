const mysql = require('mysql');
import dbConfig from './dbConfig';

const db = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

db.connect((error: Error) => {
  if (error) {
    console.error('Error connecting to the database: ' + error.stack);
    return;
  }
  console.log('Successfully connected to the database.');
});

export default db;