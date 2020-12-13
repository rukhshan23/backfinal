const mysql=require('mysql');

const connection = mysql.createConnection({
	host: 'us-cdbr-east-02.cleardb.com',
	user: 'b9440926a02f88',
	password: '12d1c848',
	port:'3306',
	database: 'heroku_c6da52e4d029402'
});

connection.connect((err) => {
	if (err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(connection, 2000); // We introduce a delay before attempting to reconnect,
    }
	console.log('Connected asdsad');
});

module.exports=connection;