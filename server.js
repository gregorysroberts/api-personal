// var personal = [{
//   name: "Greg", 
//   location: "Provo",
//   hobbies: ["biking", "climbing", "music"],
//   occupations: ["gear guy", "student", "marketing"]
// }];

var express = require('express');

var app = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(function(req, res, next){
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept');
		res.type('application/json');
		next();
	})
});

app.get('/name', function(req, res) {
	res.send({name: "Greg"});
});

app.get('/location', function(req, res) {
	res.send({location: "Provo"});
});

app.get('/hobbies', function(req, res) {
	var hobbies = ["biking", "climbing", "music", "d", "z", "f"];
	var order = req.query.order;
	if (order == 'asc'){
		hobbies.sort();
	} 
	if (order == 'desc') {
		hobbies.sort().reverse();
	}
	res.send(hobbies);
});

app.get('/occupations', function(req, res) {
	res.send({occupations: ["gear guy", "student", "marketing"]});
	req.query.order;
});

app.get('/occupations/latest', function(req, res) {
	res.send({occupations: "marketing"});
});

app.listen(12200);