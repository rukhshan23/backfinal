const connection=require("../database");
exports.display= async function(req,res){

	let name=req.body.name
	let seller_id=req.body.seller_id
	let pic_links=req.body.pic_links
	let price=req.body.price
	let stock=req.body.stock
	let category=req.body.category

	console.log(name);
	console.log(seller_id);
	console.log(pic_links);
	console.log(price);
	console.log(stock);
	console.log(category);
	connection.query("INSERT INTO product(name,seller_id,pic_links,price,stock) values(?,?,?,?,?)",[name,seller_id,pic_links,price,stock] ,async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Servor error',
			'success':false
		});
	}
	else{
		console.log(results.insertId);
		connection.query("INSERT INTO category(product_id,cat_name) values(?,?)",[results.insertId,category] ,async function (error,results2,fields){
		
		if (error){
		res.send({
			'code':404,
			'message':'Servor error',
			'success':false
		});
		}
		else
		{
		
		res.send({
			'code':202,
			'message':'Successfull',
			'success':true
		});
		}
		
		
		
		});
		
		
		
	}
	});
};