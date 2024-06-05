import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { Patient } from '../../../types';
import { PatientsService } from '../../../services/patients.service';


@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterLink, MatCardModule],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent {
  

  patient!: Patient;
  testId!: string;
  

  constructor(
    private patientService: PatientsService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(){
    
    this.route.params.subscribe(params => {
      this.testId = params['id']; // Access the 'id' parameter from the URL
      console.log('Test ID:', this.testId);})
   
    this.patientService.getPatient(this.testId!).subscribe(response => {
      this.patient = response;
      console.log(this.patient);
    })
  }

}
