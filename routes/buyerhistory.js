const connection=require("../database");
exports.display= async function(req,res){
	let buyer_id= req.params.id;
	

	console.log(buyer_id);
	
	
	connection.query("SELECT date,order_id,items.product_id,shipping_status,product.name,items.price,quantity from items,product where product.product_id=items.product_id and buyer_id=? ",[buyer_id] ,async function (error,results,fields)
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
	results=JSON.parse(JSON.stringify(results));
		res.send(results);
		

	}
	
	});
		
};
