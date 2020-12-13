const connection=require("../database");
exports.display= async function(req,res){
    let email=req.body.email
    let password = req.body.password
	connection.query("UPDATE account SET  password = ? WHERE email = ?",[password,email],async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Server error'
		});
	}
	else{
		// results=JSON.parse(JSON.stringify(results));
		res.send({
            'success' : true,
            'message' : 'Password Updated Successfully'
        });
	}
	});
};