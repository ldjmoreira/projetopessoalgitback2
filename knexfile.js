//const { db } = require('./.env')
// const dotenv = require('dotenv') ;
//dotenv.config();
module.exports = {
	
	client: 'pg',
	connection: {
	//	connectionString :	'postgres://snjowmsoejvgha:cdcb934e471abb4a45e69b350690125eb5be1b3e4ca9e952098a1be73865d60f@ec2-3-217-216-13.compute-1.amazonaws.com:5432/dd1tdrib1nauud',
	//ssl: { rejectUnauthorized: false }
	//    connectionString :	process.env.DATABASE_URL,
	//ssl: { rejectUnauthorized: false }
	connectionString :	'postgresql://postgres:NovaBrst@!@localhost:5432/dd1tdrib1nauud',	
		
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