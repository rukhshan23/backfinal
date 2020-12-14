const connection=require"../database.js"

exports.display= async function(req,res){
	let order_id=req.body.order_id
	let seller_id=req.body.seller_id
	let price=req.body.price
	let quantity=req.body.quantity
	let buyer_id=req.body.buyer_id
	let product_id=req.body.product_id
	let shipping_status=req.body.shipping_status
	let credit_used=req.body.credit_used
	let date=req.body.date
	let discount=req.body.discount
	let query=""
	let lis=[]
	if (order_id==-1)
	{
		lis=[seller_id,price,quantity,buyer_id,product_id,shipping_status,credit_used,date,discount]
		query="INSERT INTO items(seller_id,price,quantity,buyer_id,product_id,shipping_status,credit_used,date,discount) values(?,?,?,?,?,?,?,?,?)"
	}
	else{
	console.log("here");
		query="INSERT INTO items(order_id,seller_id,price,quantity,buyer_id,product_id,shipping_status,credit_used,date,discount) values(?,?,?,?,?,?,?,?,?,?)"
		lis=[order_id,seller_id,price,quantity,buyer_id,product_id,shipping_status,credit_used,date,discount]
	
	}

	
	console.log(order_id);
	console.log(buyer_id);
	console.log(price);
	console.log(quantity);
	console.log(product_id);
	connection.query(query,lis ,async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Servor error',
			'success':false
		});
	}
	else{
		console.log(results.insertId);
		connection.query("update product set stock=stock-1 where product_id=?",[product_id] ,async function (error,results,fields){

		if (error)
		{
			console.log("error");
		}
		else
		{
			console.log("no error");
		}
		});
		res.send({
			'code':202,
			'message':'Successfull',
			'success':true,
			"order_id":results.insertId
		});
		}
		
		
		
	
	});
};
