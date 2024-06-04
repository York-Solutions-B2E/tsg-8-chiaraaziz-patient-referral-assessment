package com.example.patient_data;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
// Class
public class Controller {

    @GetMapping("/hello")
    public String insert() {

        // Print and display name and age
        //System.out.println(name);
        //System.out.println(age);
        return "Hello World yo!" ;
    }
}