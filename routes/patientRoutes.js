const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const patientController = require('../controllers/patientController');


router.get('/getAddPatient', patientController.getAddPatient)
router.get('/', patientController.getPatientHome);
//router.get('/:id', patientController.getOne);


router.post('/addPatient', patientController.postAddNewPatient);
router.post('/editPatient/:id', patientController.postEditPatient);

module.exports = router;