package com.example.patient_data.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
    @GetMapping("/patient")
    public ResponseEntity<Patient> savePatient(@RequestBody Patient patient) {
        Patient newPatient = patientService.savePatient(patient);
        return ResponseEntity.ok(newPatient);
    }




    
}
