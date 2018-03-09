// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const url = require("url");
const moment = require("moment");


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res)=> {
  res.writeHead(200,{"Content-Type":"application/json"});
  
  const time = moment().format("MMMM Do YYYY");
  const unixtime = Date.parse(new Date());
  
  const data = {
    time,
    unixtime
  
  }
  
  
  
  res.end(JSON.stringify(data));
  
});


app.get("/:time/", (req, res)=> {
  res.writeHead(200,{"Content-Type":"application/json"});
  
  

  
  const rawTime = moment(req.url.slice(1,req.url.length).split("%").join(" "));
  const time = rawTime.format("MMMM Do YYYY");
  const unixtime = Date.parse(rawTime.format("DD MMM YYYY"));
  
  const data = {
    time,
    unixtime
  
  }
  
  
  res.end(JSON.stringify(data));
});



const listener = app.listen(process.env.PORT,  () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
