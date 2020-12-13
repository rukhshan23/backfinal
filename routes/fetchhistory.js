const connection=require("../database");
exports.display= async function(req,res){
    let buyer_id=req.body.buyer_id
    console.log(buyer_id);
    connection.query('SELECT name,quantity,price,date FROM ITEMS FULL OUTER JOIN PRODUCT ON ITEMS.product_id=PRODUCT.product_id WHERE ITEMS.buyer_id=?',[buyer_id],async function (error,results,fields){
        if (error){
            res.send({
                'code':404,
                'message':'Servor error'
            });
        }
        else
    {
        
            results =JSON.parse(JSON.stringify(results));
            res.send(results);

        
    }
    
    });


};