package com.example.patient_data;


import com.example.patient_data.PatientRepository.PatientRepository;
import com.example.patient_data.entity.Patient;
import netscape.javascript.JSObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
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

    

    @GetMapping("/dashboardInsert1")
    public Patient patientInsert() {
        Patient p = new Patient();
        p.setId(0);
        p.setName("Bruce Banner");
        p.setDateOfBirth(LocalDate.of(1975, 02, 14));
        p.setContactInfo("963-852-7410");
        p.setReasonForReferral("Gamma exposure");
        p.setReferralStatus("Pending");
        p.setCreatedAt(LocalDate.of(2022, 01, 10));
        p.setUpdatedAt(LocalDate.of(2024, 06, 01));
        return patientRepository.save(p);
    }
    @GetMapping("/dashboardInsert")
    public Patient patientInsert1() {
        Patient p = new Patient();
        p.setId(1);
        p.setName("Tony Stark");
        p.setDateOfBirth(LocalDate.of(1971, 04, 14));
        p.setContactInfo("753-951-7896");
        p.setReasonForReferral("Shrapnel to heart");
        p.setReferralStatus("Accepted");
        p.setCreatedAt(LocalDate.of(2021, 10, 10));
        p.setUpdatedAt(LocalDate.of(2023, 04, 05));
        return patientRepository.save(p);
    }



}