const connection=require("../database");
exports.display= async function(req,res){
	let buyer_id=req.body.data.buyer_id;
	let product_id=req.body.data.product_id;
	



	console.log(buyer_id);
	console.log(product_id);
	

	
	
	
	connection.query("DELETE from cart where buyer_id=? and product_id=?",[buyer_id,product_id] ,async function (error,results,fields)
	{
	if (error)
	{
		res.send({
			'code':404,
			'message':'Servor error. Try again',
			'success':false
		});
	}
	else
	{
		res.send({
			'code':202,
			'message':'Successful',
			'success':true
		});
		

	}
	
	});
	};

