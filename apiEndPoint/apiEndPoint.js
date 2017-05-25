const Ninja = require('../models/ninja');

module.exports = {
	getTheGeoLocation: (req, res, next)=>{

		console.log(next,'what');
		let lng = parseFloat(req.query.lng);
		let lat = parseFloat(req.query.lat);

		Ninja.geoNear(
			{type: 'Point', coordinates: [lng, lat]},
			{maxDistance: 100000, spherical: true
			})
		.then((ninjas)=>{
			res.send(ninjas);
		})
		.catch(next);
	},

	postNewNinja : (req, res, next)=>{
		Ninja.create(req.body)
		.then((ninja)=>{
			res.send(ninja);
		})
		.catch(next);
	},

	updateNinja : (req, res, next)=>{
		Ninja.findByIdAndUpdate({_id: req.params.id}, req.body)
		.then(()=>{
			Ninja.findOne({_id: req.params.id})
			.then((ninja)=>{
				res.send(ninja);
			});
		})
		.catch(next);
	},
	
	deleteNinja :  (req, res, next)=>{
		Ninja.findByIdAndRemove({_id: req.params.id})
		.then((ninja)=>{
			res.send(ninja);
		})
		.catch(next);
	}

};