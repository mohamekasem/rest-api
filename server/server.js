const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set express app

const app = express();

//connect to mongodb

mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;


 // initialize routes
 require('./config/middleware/middleware.js')(app, express);

 app.use('/api', require('./config/routes/api'));

//error handling middl ware

app.use(function (err, req, res, next) {

	res.status(422).send({error: err._message})
	
});

//listen for requests

let port = process.env.port || 4000;

app.listen(port, function (){ console.log('now listen on port:' + port) });
