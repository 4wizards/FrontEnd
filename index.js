var table = document.getElementById("table");
var live = document.getElementById("live");

var id = 1;
var temp = "14 grader";
var hum = "40 pocent";
var time = "13:51";

var livedata = "de här ska ju bli live dårå"

live.innerHTML= `<p>${livedata}</p>`


for (var i = 0; i <10; i++) {
    table.innerHTML += `<tr><td>${id}</td><td>${temp}</td><td>${hum}</td><td>${time}</td></tr>`
}