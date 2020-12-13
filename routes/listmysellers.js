const connection=require("../database");

exports.display= async function(req,res){
	let buyer_id=req.body.buyer_id
	connection.query("SELECT distinct (product.product_id), product.name FROM product inner join items on product.product_id=items.product_id where buyer_id=?",[buyer_id],async function (error,results,fields){
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