const connection=require("../database");
exports.display= async function(req,res){
	let seller_id=req.body.seller_id
	connection.query("SELECT * FROM items Where seller_id = ? and shipping_status=0",[seller_id],async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'list error'
		});
	}
	else{
		results=JSON.parse(JSON.stringify(results));
        res.send(results);

	}
	});
};