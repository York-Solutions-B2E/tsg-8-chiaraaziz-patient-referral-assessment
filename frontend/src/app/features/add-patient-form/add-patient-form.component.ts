import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PatientsService } from '../../services/patients.service';
import { Patient } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-patient-form.component.html',
  styleUrl: './add-patient-form.component.css'
})
export class AddPatientFormComponent {
  patient: Patient= {
    id: '',
    name: '',
    dateOfBirth: '',
    contactInfo: '',
    referralReason: '',
    referralStatus: '',
    createdAt: '',
    updatedAt: ''
  };

  patientForm = this.formBuilder.group({
    name: ['', Validators.required],
    dateOfBirth: ['', [Validators.required]],
    contactInfo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    referralReason: ['', Validators.required],
    referralStatus: ['', [Validators.required]],

  })
  

  constructor(private formBuilder: FormBuilder, private patientsService: PatientsService, private router:Router){}

  ngOnInit(): void {
    // this.patient.name = this.patientForm.value.name;

    
  }
  

  onSubmit():void {
    // this.patientsService.addPatient(this.patient).subscribe(() => {this.router.navigateByUrl('/dashboard')});
    console.log('form data', this.patientForm.value);
    
  }

  

}
