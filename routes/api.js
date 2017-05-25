const express = require ('express');
const router = express.Router();
const apiEndPoint = require('../apiEndPoint/apiEndPoint.js')
// get a list of ninjas from the db
router.get('/ninjas', apiEndPoint.getTheGeoLocation);

// add a new ninja to the db
router.post('/ninjas', apiEndPoint.postNewNinja);

// update a ninja in the db
router.put('/ninjas/:id', apiEndPoint.updateNinja);

// delete a ninja from the db
router.delete('/ninjas/:id', apiEndPoint.deleteNinja);

module.exports = router;	