const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  patientName: { type: String, required: true },
  patientGender: { type: String, required: true },
  patientAge: { type: Number, required: true },
  patientAddress: {type: String, required: true },
  patientDiagnosis: {type: String, required: true},
  patientTreatment: {type: String, required: true},
  patientPrescription: {type: String, required: true},
  patientTCA: {type: String, required: true},
  patientContact: {type: Number, required: true},
  patientVisitDate:{type: String, required: true}
}, 
);

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;