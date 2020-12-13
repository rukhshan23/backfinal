const connection=require("../database");
exports.display= async function(req,res){
	let id= req.params.id;
	

	
	
	
	connection.query("SELECT * from cart where buyer_id=?",[id] ,async function (error,results,fields)
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