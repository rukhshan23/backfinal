const connection=require("../database");
exports.display= async function(req,res){
	connection.query("SELECT * FROM buyer",async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Servor error'
		});
	}
	else{
		results=JSON.parse(JSON.stringify(results));
		res.send(results);
	}
	});
};