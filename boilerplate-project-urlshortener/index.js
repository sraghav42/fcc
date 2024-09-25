require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const url=require('url');
const dns=require('dns');
const { error } = require('console');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

let urldata=[];
let urlind=0;

app.use(express.json());

app.post("/api/shorturl", function(req,res){
  originalurl=req.body.url;
  urldata[urlind]=originalurl;
  shorturl=urlind++;

  let parsedurl;
  try{
    parsedurl=new URL(originalurl);
  }catch(err){
    return res.json({error:'invalid url'});
  }

  const domain=parsedurl.hostname;
  dns.lookup(domain, (err) =>{
    if(err){
      return res.json({error:'invalid url'});
    }
  })

  console.log(domain);
  res.json({original_url:originalurl, short_url:shorturl});
})

app.get("/api/shorturl/:short_url",function(req,res){
  extractedurlind=req.params.short_url;
  finalurl=urldata[extractedurlind];

  if(!finalurl){
    return res.json({error:'No short URL found for the given input'});
  }

  res.redirect(finalurl);
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
