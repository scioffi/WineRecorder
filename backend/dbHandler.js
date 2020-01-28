const mysql = require("mysql2/promise");
const DB_CONFIG = require("./databaseConfig.json");

let db;

const connectDatabase = () => {
	if (!db) {
		db = mysql.createPool({
			connectionLimit: 10,
			host: DB_CONFIG.hostname,
			user: DB_CONFIG.username,
			password: DB_CONFIG.password,
			database: DB_CONFIG.database,
			debug: false
		});

		db.getConnection(function(err){
			if(!err) {
				console.log('Database is connected!');
			} else {
				console.log(err);
			}
		});
	}
	return db;
};

module.exports = connectDatabase();