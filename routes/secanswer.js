const connection=require("../database");
exports.display= async function(req,res){
	let email=req.params.email
	connection.query("SELECT sec_ans FROM account WHERE email = ?",[email],async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Server error'
		});
	}
	else{
		// results=JSON.parse(JSON.stringify(results));
		res.send({
			'success':true,
			'sec_ans' : results[0].sec_ans
		});
	}
	});
};