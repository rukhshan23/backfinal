const connection=require("../database");
exports.display= async function(req,res){
	connection.query("SELECT seller_id,SUM(price) as price,SUM(quantity) as quantity FROM items Group By seller_id",async function (error,results,fields){
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