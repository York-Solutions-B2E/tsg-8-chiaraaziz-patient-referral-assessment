package com.example.patient_data;


import com.example.patient_data.PatientRepository.PatientRepository;
import com.example.patient_data.entity.Patient;
import netscape.javascript.JSObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController()
@CrossOrigin(origins = "http://localhost:4200")
// Class
public class Controller {

    @Autowired
    PatientRepository patientRepository;

    @GetMapping("/hello")
    public String insert() {

        // Print and display name and age
        //System.out.println(name);
        //System.out.println(age);
        return "Hello World yo!";
    }   

    @RequestMapping("/dashboard")
    public List<Patient> Patients()
    {
        return patientRepository.findAll().stream().toList();
        
    }



    // @RequestMapping("/dashboard")
    // public List<Patient> Patients()
    // {
    //     // TODO: make this pull from DB in future
    //     Patient patient1 = new Patient();
    //     patient1.setName("Dork");
    //     Patient patient2 = new Patient();
    //     patient2.setName("Nerd");

    //     List<Patient> patients = new ArrayList<Patient>();
    //     patients.add(patient1);
    //     patients.add(patient2);

    //     return patients;
    // }

}