const connection=require("../database");
exports.display= async function(req,res){
	let date=req.params.date
	connection.query("SELECT date,SUM(price) as price,SUM(quantity) as quantity FROM items Where date = ? Group By date",[date],async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Server error'
		});
	}
	else{
		results=JSON.parse(JSON.stringify(results));
		res.send(results);
	}
	});
};