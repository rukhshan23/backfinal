const mysql=require('mysql');

const connection = mysql.createPool({
	host: 'us-cdbr-east-02.cleardb.com',
	user: 'b9440926a02f88',
	password: '12d1c848',
	port:'3306',
	database: 'heroku_c6da52e4d029402'
});



module.exports=connection;