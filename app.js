//jshint esversion:6

//require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const http = require('http');

const _ = require('lodash')
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
console.log(process.env.PORT)


app.get("/", function(req, res) {
  http.get("http://coldfeet.herokuapp.com/api/getvalues/10", function(response){
    console.log(response.statusCode);
    response.on('data', function(data){
    const wdata = JSON.parse(data);    
    for(item of wdata){
      item["time"]=(new Date((item.measurementTime)*1000).toLocaleTimeString("sv-SE"))  
    }     
    res.render("list", {newListItems: wdata}); 
    });
  });
});

app.listen(process.env.PORT, function() {
  console.log("Server started on port " + process.env.PORT);
});
