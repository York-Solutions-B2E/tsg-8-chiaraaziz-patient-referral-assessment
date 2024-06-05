package com.example.patient_data.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.patient_data.PatientRepository.PatientRepository;
import com.example.patient_data.entity.Patient;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {

    @Autowired
    PatientRepository patientRepository;

    @RequestMapping("/dashboard")
    public List<Patient> Patients()
    {
        return patientRepository.findAll().stream().toList();
        
    }


    
}
