var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get("/", function(req,res) {
  res.sendFile('/index.html')
})

var promenna = "December 23, 2015"
var date


app.get('/:promenna', function (req, res) {
  var promenna = req.params.promenna
  var date

  if(promenna.indexOf(' ') >= 0) {
    date = new Date(promenna)
  } else {
    date = new Date(promenna * 1000)
  }
  
  if(date == "Invalid Date") {
    var vysledek = {"unix":null,"natural":null}
    res.json(vysledek)
  } else {
    var month = date.toLocaleString("en-us", { month: "long" });
    var vysledek = {
      "unix": date.getTime()/1000,
      "natural": month + " " + date.getDate() + ", " + date.getFullYear()
    }
    res.json(vysledek)
  }
  
  res.end()
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});