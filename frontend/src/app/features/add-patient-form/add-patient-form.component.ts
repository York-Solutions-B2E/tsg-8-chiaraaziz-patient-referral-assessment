import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
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
  selectedReason: FormControl = new FormControl('');
  selectedStatus: FormControl = new FormControl('');

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
    

    
  }
  onDropDownChange(){
    this.patient.referralReason = this.selectedReason.value;
    this.patient.referralStatus = this.selectedStatus.value;
    console.log(`option ${this.selectedReason.value}`);
    console.log(`option ${this.selectedStatus.value}`);
    
  }
  

  onSubmit():void {
    this.patient.name = this.patientForm.value.name;
    this.patient.dateOfBirth = this.patientForm.value.dateOfBirth;
    this.patient.contactInfo = this.patientForm.value.contactInfo;
    this.patient.referralReason;
    this.patient.referralStatus;
    // this.patientsService.addPatient(this.patient).subscribe(() => {this.router.navigateByUrl('dashboard')});
    console.log('form data', this.patient);
    
  }

  

}
