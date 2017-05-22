const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//set express app

const app = express();


//connect to mongodb

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

 // initialize routes

app.use('/api', require('./routes/api'));

//error handling middl ware

app.use(function (err, req, res, next) {
	console.log(err)
	res.status(422).send({error: err._message})
	
})

//listen for requests

let port = process.env.port || 4000;

app.listen(port,()=> console.log('now listen on port:' + port));
