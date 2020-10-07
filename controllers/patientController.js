let Patient = require('../models/PatientModel');
const dateFormat = require('dateformat');

exports.getPatientHome = (req, res) => {
  Patient.find()
    .then((patients) =>
      res.render('patientList', {
        title: 'Patient List',
        patients,
      })
    )
    .catch((err) => res.json(err));
};

exports.getAddPatient = (req, res) => {
  res.render('addPatient');
};

exports.postAddNewPatient = (req, res) => {
  const patientName = req.body.name;
  const patientGender = req.body.gender;
  const patientAge = req.body.age;
  const patientAddress = req.body.address;
  const patientDiagnosis = req.body.diagnosis;
  const patientTreatment = req.body.treatment;
  const patientPrescription = req.body.prescription;
  const patientTCA = dateFormat(req.body.tca, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  const patientContact = req.body.contact;
  const patientVisitDate = dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT");
  

  const newPatient = new Patient({
    patientName,
    patientAge,
    patientGender,
    patientAddress,
    patientDiagnosis,
    patientTreatment,
    patientPrescription,
    patientTCA,
    patientContact,
    patientVisitDate
  });

  newPatient
    .save()
    .then(() => res.json('User added'))
    .catch((err) => res.json(err));
};

exports.getOne = (req, res) => {
  Patient.findById(req.params.id)
    .then((patient) => res.json(patient))
    .catch((err) => res.status(400).json('Error: ' + err));
};

exports.postEditPatient = (req, res) => {
  Patient.findById(req.params.id)
    .then((patient) => {
      patient.patientName = req.body.name;
      patient.patientGender = req.body.gender;
      patient.patientAge = Number(req.body.age);

      patient
        .save()
        .then(() => res.json('Patient updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
};
