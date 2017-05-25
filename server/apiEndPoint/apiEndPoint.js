const Ninja = require('../db.models/ninja');

module.exports = {
	getTheGeoLocation: function (req, res, next){

		let lng = parseFloat(req.query.lng);
		let lat = parseFloat(req.query.lat);

		Ninja.geoNear(
			{type: 'Point', coordinates: [lng, lat]},
			{maxDistance: 100000, spherical: true
			})
		.then( function (ninjas){
			res.send(ninjas);
		})
		.catch(next);
	},

	postNewNinja : function(req, res, next){
		Ninja.create(req.body)
		.then(function(ninja){
			res.send(ninja);
		})
		.catch(next);
	},

	updateNinja : function (req, res, next){
		Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then( function (){
			Ninja.findOne({_id: req.params.id})
			.then(function(ninja){
				res.send(ninja);
			});
		})
		.catch(next);
	},
	
	deleteNinja :  function (req, res, next){
		Ninja.findByIdAndRemove({_id: req.params.id})
		.then(function (ninja){
			res.send(ninja);
		})
		.catch(next);
	}

};