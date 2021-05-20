//jshint esversion:6

require('dotenv').config();
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
  http.get("http://coldfeet.herokuapp.com/api/getvalues", function(response){
    console.log(response.statusCode);

    response.on('data', function(data){
4 
    const wdata = JSON.parse(data);
    //console.log(wdata);
    const temp = wdata;
    res.render("list", {newListItems: wdata});
      
    });
  });
});

app.get("/:customListName", function(req, res){
  const listName = _.capitalize(req.params.customListName);

});


app.post('/delete', function(req, res){

    res.redirect('/' + listName);
  }
)

app.listen(process.env.PORT, function() {
  console.log("Server started on port " + process.env.PORT);
});
