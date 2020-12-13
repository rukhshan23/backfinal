const connection=require("../database");
exports.display= async function(req,res){
	let product_id=req.body.product_id
	connection.query("Delete From product Where product_id = ?",[product_id],async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Server error'
		});
	}
	else{
		res.send({
		'code':202,
		'message':'Approval Successful',
		'success':true
	});
	}
	});

};