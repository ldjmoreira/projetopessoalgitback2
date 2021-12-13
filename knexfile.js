//const { db } = require('./.env')
//const dotenv = require('dotenv') ;
//dotenv.config();
module.exports = {
	
	client: 'postgresql',
	connection: process.env.DATABASE_URL,
	/*
	connection: {
		host : '127.0.0.1',
		port : 5432,
		user : 'postgres',
		password : 'NovaBrst@!',
		database : 'knowledge'
	},
*/
    
    migrations: {
		tableName: 'knex_migrations'
    }
    
};