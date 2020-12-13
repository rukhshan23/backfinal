const connection=require("../database");
exports.display= async function(req,res){
	let comm_percentage= req.body.comm_percentage
	let no_prod= req.body.no_prod
	
	
	connection.query("insert into subscription(comm_percentage,no_prod) values(?,?)",[comm_percentage,no_prod] ,async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Servor error'
		});
	}
	else{
		res.send({
			'code':201,
			'success':true

		});
	}
	});
};