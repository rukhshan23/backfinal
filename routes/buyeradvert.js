const connection=require("../database");
exports.display= async function(req,res){

	connection.query("Select name,pic_links,price From product Where advert_status=2 ",async function (error,results,fields){
	if (error){
		res.send({
			'code':404,
			'message':'Servor error',
			'success':false
		});
	}
	else{
			console.log(results)
			results=JSON.parse(JSON.stringify(results));
            res.send(results);
	
		
	}
	});
};