var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"}));

app.set("view engine", "handlebars");

var mysql = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"toor",
	database:"task_saver_db"
});

connection.connect(function(err){
	if (err){
		console.error("error connecting: " + err)
		return;
	}
	console.log("connected as id " + connection)
});

app.get("/", function(req, res){
	connection.query("SELECT * FROM tasks", function(err, results){
		if(err) throw err;
		//Test it 
		//console.log('The solution is: ' +  data)
		//Test it
		// return res.send(data);
		res.render("index", {task:results});
	});
});

app.post("/", function(req, res){
	console.log('You sent ' + req.body.task);
	//Test it
	//return res.send('You sent '+ req.body.task);
	connection.query("INSERT INTO tasks(task) VALUES (?)", [req.body.task], function(err, results){
		if (err) throw err;
		res.redirect("/");
	});
});

app.listen(port);