package com.example.patient_data.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.patient_data.PatientService.PatientService;
import com.example.patient_data.entity.Patient;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {

    private PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }
    //gets all patients in database
    @RequestMapping("/dashboard")
    public List<Patient> getAllPatients()
    {
        return patientService.getAllPatients();
        
    }
    //create a new patient referral
    @PostMapping("/patient")
    public ResponseEntity<Patient> savePatient(@RequestBody Patient patient) {
        Patient newPatient = patientService.savePatient(patient);
        return ResponseEntity.ok(newPatient);
    }

    //get patients by id
    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Integer id) {
        Optional<Patient> patient = patientService.getPatientById(id);
        return patient.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //edit or put mapping
    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Integer id, @RequestBody Patient patient) throws Exception {
        Patient updatedPatient = patientService.updatedPatient(id, patient);
        return ResponseEntity.ok(updatedPatient);
    }

    //delete a patient
    @DeleteMapping("/patients/{id}")
    public ResponseEntity<String> deletePatient(@PathVariable Integer id) {
        patientService.deletePatient(id);
        return ResponseEntity.ok("Patient has been deleted!");
    }




    
}
