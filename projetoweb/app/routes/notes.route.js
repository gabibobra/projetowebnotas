module.exports = function(app) {
 
	var express = require("express");
	var router = express.Router();
	
    const notes = require('../controllers/notes.controller.js');
	
	var path = __basedir + '/views/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	
	app.get('/', (req,res) => {
		res.sendFile(path + "home.html");
	});

	app.get('/form', (req,res)=>{
		res.sendFile(path + "index.html");
	})
 
    // Save a User to MongoDB
    app.post('/api/users/save', notes.save);
 
    // Retrieve all Users
	app.get('/api/users/all', notes.findAll);
	
	app.get('/listar', (req, res) =>{
		res.sendFile(path + "list.html");
	})
	
	app.use("/",router);
 
}