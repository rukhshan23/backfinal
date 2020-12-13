const connection=require("../database");
exports.display= async function(req,res){
	let seller_id=req.params.id
	connection.query("SELECT seller_id,SUM(price) as price,SUM(quantity) as quantity FROM items Where seller_id = ? Group By seller_id",[seller_id],async function (error,results,fields){
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