const connection=require("../database");
exports.display= async function(req,res){
	let order_id=req.body.order_id
	let seller_id=req.body.seller_id
	connection.query("UPDATE items SET shipping_status = ? where order_id = ? and seller_id=?",[1,order_id, seller_id],async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Server error'
		});
	}
	else{
		res.send({
		'code':202,
		'message':'Orders have been updated!',
		'success':true
	});
	}
	});

};