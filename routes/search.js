const connection=require("../database");
exports.display= async function(req,res){
	let search= req.params.search;
	search="%"+search+"%"

	
	
	
	connection.query("SELECT * from product where name LIKE ?",[search] ,async function (error,results,fields)
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