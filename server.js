var express = require("express");
bodyParser= require("body-parser");
let cors=require("cors");
var news=require("./routes/news");;
var addBuyer=require("./routes/addBuyer");
var deleteAccount=require("./routes/deleteAccount");
var buyerhistory=require("./routes/buyerhistory");
var addaccount=require("./routes/addaccount");
var addseller=require("./routes/addseller");
var postproduct=require("./routes/postproduct");
var addsubscription=require("./routes/addsubscription");
var login=require("./routes/login");
var listproducts=require("./routes/listproducts");
var search=require("./routes/search");
var addtocart=require("./routes/addtocart");
var getcart=require("./routes/getcart");
var deletecart=require("./routes/deletecart");
var additem=require("./routes/additem");
var category=require("./routes/category");
var updatecredit=require("./routes/updatecredit");
var decrementcredit=require("./routes/decrementcredit");
var secquestion = require('./routes/secquestion')
var secanswer = require('./routes/secanswer')
var resetpassword = require('./routes/resetpassword')

//var addadmin = require("./routes/addadmin")
//var viewtrends = require("./routes/viewtrends")
var viewalltrends = require("./routes/viewalltrends")
//var datetrends = require("./routes/datetrends")
var pendingapproval = require("./routes/pendingapproval")
var adminapproval = require("./routes/adminapproval")
var adminrejection = require("./routes/adminrejection")
var viewtrends = require("./routes/viewtrends")
var datetrends = require("./routes/datetrends")
var pendingadvert = require("./routes/pendingadvert")
var approveadvert = require("./routes/approveadvert")
var rejectadvert = require("./routes/rejectadvert")
var buyeradvert = require("./routes/buyeradvert")
var addadvert = require("./routes/addadvert")
var discount=require("./routes/discount");
var dispatch=require("./routes/dispatch");
var list=require("./routes/list");
var dispatchlist=require("./routes/dispatchlist");
var listmysellers=require("./routes/listmysellers");
var review=require("./routes/review");

var app=express();
var router=express.Router();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

router.all("/",function (req,res){
	res.send({message: "welcome to our upload menu"})
});
router.all("/news",cors(),news.display);
router.all("/addBuyer",cors(),addBuyer.display);
router.all("/addaccount",cors(),addaccount.display);
router.all("/addseller",cors(),addseller.display);
router.all("/addsubscription",cors(),addsubscription.display);
router.all("/deleteBuyer",cors(),deleteAccount.display);
router.all("/buyerhistory/:id",cors(),buyerhistory.display);
router.all("/postproduct",cors(),postproduct.display);
router.all("/listproducts/:id",cors(),listproducts.display);
router.all("/login",cors(),login.display);
router.all("/search/:search",cors(),search.display);
router.all("/addtocart",cors(),addtocart.display);
router.all("/getcart/:id",cors(),getcart.display);
router.all("/deletecart",cors(),deletecart.display);
router.all("/additem",cors(),additem.display);
router.all("/category/:catname",cors(),category.display);

//router.all("/addadmin",cors(),addadmin.display);
//router.all("/viewtrends",cors(),viewtrends.display);
router.all("/viewalltrends",cors(),viewalltrends.display)
//router.all("/datetrends",cors(),datetrends.display)
router.all("/pendingapproval",cors(),pendingapproval.display)
router.all("/adminapproval",cors(),adminapproval.display)
router.all("/adminrejection",cors(),adminrejection.display)
router.all("/pendingadvert",cors(),pendingadvert.display)
router.all("/approveadvert",cors(),approveadvert.display)
router.all("/rejectadvert",cors(),rejectadvert.display)
router.all("/viewtrends/:id",cors(),viewtrends.display);
router.all("/datetrends/:date",cors(),datetrends.display)
router.all("/buyeradvert",cors(),buyeradvert.display);
router.all("/addadvert",cors(),addadvert.display)

router.all("/list",cors(),list.display);
router.all("/discount",cors(),discount.display);
router.all("/dispatch",cors(),dispatch.display);
router.all("/dispatchlist",cors(),dispatchlist.display);
router.all("/listmysellers",cors(),listmysellers.display);
router.all("/review",cors(),review.display);

router.all("/updatecredit",cors(),updatecredit.display);
router.all("/decrementcredit",cors(),decrementcredit.display);
router.all("/secquestion/:email",cors(),secquestion.display)
router.all("/secanswer/:email",cors(),secanswer.display)
router.all("/resetpassword",cors(),resetpassword.display)


app.use("/runtime",router);
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("server is listening");