const express = require ('express');
const apiEndPoint = require('../../apiEndPoint/apiEndPoint.js');
const router = express.Router();

// get a list of ninjas from the db

router.get('/ninjas', apiEndPoint.getTheGeoLocation);

// add a new ninja to the db

router.post('/ninjas', apiEndPoint.postNewNinja);

// update a ninja in the db

router.put('/ninjas/:id', apiEndPoint.updateNinja);

// delete a ninja from the db

router.delete('/ninjas/:id', apiEndPoint.deleteNinja);

module.exports = router;	