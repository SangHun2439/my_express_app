import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWD, DB_DATABASE, DB_MAX_CONN } = process.env;

let db_pool = mysql.createPool({
	"host":DB_HOST,
	"user":DB_USER,
	"password":DB_PASSWD,
	"database":DB_DATABASE,
	"connectionLimit":DB_MAX_CONN
});

export default db_pool;
