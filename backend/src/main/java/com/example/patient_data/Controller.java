package com.example.patient_data;


import com.example.patient_data.entity.Patient;
import netscape.javascript.JSObject;
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

    @GetMapping("/hello")
    public String insert() {

        // Print and display name and age
        //System.out.println(name);
        //System.out.println(age);
        return "Hello World yo!";
    }
//    @GetMapping("/dashboard")
//    public JSObject getAllPatients() {
//        JSObject jsObject = new JSObject();
//        jsObject.setMember("Tony Stark");
//        return jsObject;
//    }

//    @RequestMapping(value = "/dashboard", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//    String getTest() {
//        return "/test.json";
//    }

    @RequestMapping("/dashboard")
    public List<Patient> Patients()
    {
        // TODO: make this pull from DB in future
        Patient patient1 = new Patient();
        patient1.setName("Dork");
        Patient patient2 = new Patient();
        patient2.setName("Nerd");

        List<Patient> patients = new ArrayList<Patient>();
        patients.add(patient1);
        patients.add(patient2);

        return patients;
    }

}