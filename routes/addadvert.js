const connection=require("../database");
exports.display= async function(req,res){
	let name= req.body.name
    let product_id=req.body.product_id
    let status=req.body.status
	

	console.log(name);
    console.log(product_id);
    
	
	
	connection.query("update product set advert_status=1 where product_id=? and visibility=1",[product_id] ,async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Servor error. Try again',
			'success':false
		});
	}
	else{
		
			res.send({
			'code':201,
			'message':"Successfull",
			'success':true,
			

		});
	}

		
	
		
	});
};