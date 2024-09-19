// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api",function(req,res){
  currdate=new Date();
  unixTimestamp=currdate.getTime();
  utcFormat=currdate.toUTCString();
  res.json({unix:unixTimestamp, utc:utcFormat});
})

app.get("/api/:date", function(req, res) {
  const input = req.params.date;
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (regex.test(input)) {
    const unixTimestamp = new Date(input).getTime();
    const utcFormat = new Date(input).toUTCString();
    res.json({ unix: unixTimestamp, utc: utcFormat });
  } else {
    const timestamp = !isNaN(input) ? parseInt(input) : input;

    const date = new Date(timestamp);

    // Check if the parsed date is valid
    if (!isNaN(date.getTime())) {
      const unixTimestamp = date.getTime();
      const utcFormat = date.toUTCString();
      res.json({ unix: unixTimestamp, utc: utcFormat });
    } else {
      res.json({ error: "Invalid Date" });
    }
  }
});


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
