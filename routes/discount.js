const connection=require("../database");
exports.display= async function(req,res){
	let product_id=req.body.product_id
	let discount=req.body.discount
	connection.query("UPDATE product SET discount = ? where product_id = ?",[discount,product_id],async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Server error'
		});
	}
	else{
		res.send({
		'code':202,
		'message':'Discount Applied',
		'success':true
	});
	}
	});

};