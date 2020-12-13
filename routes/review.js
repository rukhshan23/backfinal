const connection=require("../database");
exports.display= async function(req,res){
	let product_id=req.body.product_id
	let rating=req.body.rating
	let review=req.body.review
	let buyer_id=req.body.buyer_id
	connection.query("insert into review values(?,?,?,?)",[product_id,buyer_id,review, rating],async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Server error'
		});
	}
	else{
		res.send({
		'code':202,
		'message':'Review added',
		'success':true
	});
	}
	});

};