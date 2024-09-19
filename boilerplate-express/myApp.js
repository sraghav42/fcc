let express = require('express');
let app = express();
require('dotenv').config()
let bodyParser=require('body-parser')


console.log("Hello World")

absolutePath=__dirname+'/views/index.html'
absolutePathCSS=__dirname+'/public'

app.use(function(req,res,next){
    console.log(req.method+" "+req.path+" - "+req.ip)
    next()
})
app.use("/public",express.static(absolutePathCSS))
app.get("/",function(req,res){
    res.sendFile(absolutePath);
})

app.get("/json",function(req,res){
    var envcase=process.env.MESSAGE_STYLE
    if(envcase==="uppercase"){
        res.json({message:"HELLO JSON"})
    }
    else{
        res.json({message:"Hello json"})
    }
})


app.get("/now",function(req,res,next){
    req.time=new Date().toString()
    next()
},function(req,res){
    res.json({time:req.time})
})

app.get("/:word/echo",function(req,res){
    var eword=req.params.word
    res.json({echo:eword})
})

app.use(bodyParser.urlencoded({extended:false}))

app.route("/name").get(function(req,res){
    var fname=req.query.first
    var lname=req.query.last
    res.json({name:fname+" "+lname})
}).post(function(req,res){
    var fname=req.body.first
    var lname=req.body.last
    res.json({name:fname+" "+lname})
})


 module.exports = app;
