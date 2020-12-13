const connection=require("../database");

exports.display= async function(req,res){
	let seller_id=req.params.id;
	console.log(seller_id);
	connection.query("SELECT * FROM product WHERE seller_id=?",[seller_id],async function (error,results,fields){
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