const connection=require("../database");
exports.display= async function(req,res){
	connection.query("SELECT * FROM product Where visibility = 0 ",async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Server error'
		});
	}
	else{
		results=JSON.parse(JSON.stringify(results));
        res.send(results);

	}
	});
};