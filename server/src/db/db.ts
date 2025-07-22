import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

/**
 * Importing environment variables for database connection.
 */

const { DB_USER, DB_HOST, DB_NAME, DB_PASS } = process.env;

const pool = mysql.createPool({
	host: DB_HOST,
	user: DB_USER,
	database: DB_NAME,
	password: DB_PASS,
});

export default pool;
