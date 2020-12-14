const connection=require("../database");
exports.display= async function(req,res){
  
    let buyer_id=req.body.buyer_id
    let bill=req.body.bill

    connection.query("update buyer set credit=credit+? where buyer_id=?",[bill*0.01,buyer_id] ,async function (error,results,fields){
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
