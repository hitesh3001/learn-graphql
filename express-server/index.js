var express = require("express");
var app = express();

var data = require("./data.json");

function getPerson(personId) {
	return {
		"id": data.people[personId].id,
		"first_name": data.people[personId].first_name,
		"friends" : data.people[personId].friends.map(friend => "/people/"+ (friend % 100)),
		"last_name": data.people[personId].last_name,
		"username": data.people[personId].username,
		"email": data.people[personId].email,
	}
	
}

function getAllPersons(){
	var obj = {
		"people" : []
	}
	for (var i = 0; i < data.people.length; i++) {
			obj.people.push(getPerson(i));
		}
		return obj
}

app.get("/", function(req, res) {
	res.send("Hello World!");
});

app.get("/people/", function(req, res) {
	res.json(getAllPersons());
});

app.get("/people/:id", function(req, res) {
	var personId = req.params.id;
	var resData = getPerson(personId);
	res.json(resData);
});

app.listen(8000 , function(){
	console.log("node data server started on port 8000");
});