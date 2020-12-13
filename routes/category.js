const connection="../database.js"

exports.display= async function(req,res){
	let cat_name= req.params.catname;
	

	
	
	
	connection.query("SELECT * from product,category where category.product_id=product.product_id and cat_name=?",[cat_name] ,async function (error,results,fields)
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
