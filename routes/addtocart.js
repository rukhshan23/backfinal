const connection=require("../database");
exports.display= async function(req,res){
	let buyer_id=req.body.buyer_id;
	let product_id=req.body.product_id;
	let seller_id=req.body.seller_id;
	let price=req.body.price;
	let quantity=req.body.quantity;
	let discount=req.body.discount;
	let name=req.body.name;



	console.log(buyer_id);
	console.log(product_id);
	console.log(seller_id);
	console.log(price);
	console.log(quantity);
	console.log(discount);
	console.log(name);

	
	
	
	connection.query("INSERT INTO cart(name,buyer_id,product_id,seller_id,price,quantity,discount) values (?,?,?,?,?,?,?)",[name,buyer_id,product_id,seller_id,price,quantity,discount] ,async function (error,results,fields)
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
