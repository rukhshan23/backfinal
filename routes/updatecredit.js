const connection=require("../database");
exports.display= async function(req,res){
  
    let buyer_id=req.body.buyer_id

    connection.query("update buyer set credit=credit+100 where buyer_id=?",[buyer_id] ,async function (error,results,fields){
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
