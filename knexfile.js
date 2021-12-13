//const { db } = require('./.env')
//const dotenv = require('dotenv') ;
//dotenv.config();
module.exports = {
	
	client: 'pg',
	connection: {
		connectionString :	process.env.DATABASE_URL,
		ssl: { rejectUnauthorized: false }
	} 
	
	/*
	connection: {
		host : '127.0.0.1',
		port : 5432,
		user : 'postgres',
		password : 'NovaBrst@!',
		database : 'knowledge'
	},
*/
    

    
};