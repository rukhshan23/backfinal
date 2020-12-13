const connection=require("../database");

exports.display= async function(req,res){
    let val=req.body.val
    let buyer_id=req.body.buyer_id
	console.log(val);
	console.log("LLLLL")

    connection.query("update buyer set credit=credit-? where buyer_id=?",[val,buyer_id] ,async function (error,results,fields){
        if (error){
            res.send({
                'code':404,
                'message':'Servor error'
            });
        }
        else{
            res.send({
                'code':201,
                'message':"Successfull"
    
            });
        }
        });
};
