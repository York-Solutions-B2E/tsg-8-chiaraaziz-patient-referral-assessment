package com.example.patient_data.PatientService;


import java.util.List;
import java.util.Optional;

//import com.example.patient_data.PatientRepository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.patient_data.PatientRepository.PatientRepository;
import com.example.patient_data.entity.Patient;

@Service
public class PatientService {

//    private static final Error Error = null;
private  PatientRepository patientRepository;

   @Autowired
   public PatientService(PatientRepository patientRepository) {
       this.patientRepository = patientRepository;
   }

   //save a patient
   public Patient savePatient(Patient patient) {
    return patientRepository.save(patient);
   }

   //get all patients -- returns a list of patients
   public List <Patient> getAllPatients() {
    return patientRepository.findAll();
   }

   //get 1 patient by patient id
   public Optional<Patient> getPatientById(Integer id) {
    return patientRepository.findById(id);
   }

   //Update a patient
   public Patient updatePatient(Integer id, Patient updatedPatient) throws Exception {
    Optional<Patient> existingPatient = patientRepository.findById(id);
    if (existingPatient.isPresent()) {
        Patient patient = existingPatient.get();
        patient.setReferralReason(updatedPatient.getReferralReason());
        patient.setReferralStatus(updatedPatient.getReferralStatus());
        return patientRepository.save(patient);
    } else {
        throw new Exception("Patient not found");
    }
   }

   //delete a patient
   public void deletePatient(Integer id) {
    patientRepository.deleteById(id);
   }

}
