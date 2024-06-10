import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule, FormControlName, FormGroup } from '@angular/forms';
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
  @Input() buttonText: any;
  @Input() patient: Patient = {} as Patient;
 
  selectedReason: FormControl = new FormControl('');
  selectedStatus: FormControl = new FormControl('');

  patientForm = this.formBuilder.group({
    name: ['', Validators.required],
    dateOfBirth: ['', [Validators.required]],
    contactInfo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    referralReason: ['', Validators.required],
    referralStatus: ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private patientsService: PatientsService,
    private router:Router){}

  onDropDownChange(){
    this.patient.referralReason = this.selectedReason.value;
    this.patient.referralStatus = this.selectedStatus.value;    
  }

  onSubmit():void {
    this.patient.name = this.patientForm.value.name;
    this.patient.dateOfBirth = this.patientForm.value.dateOfBirth;
    this.patient.contactInfo = this.patientForm.value.contactInfo;
    this.patient.referralReason;
    this.patient.referralStatus;
    this.patientsService.addPatient(this.patient).subscribe(() => {this.router.navigateByUrl('/dashboard')});
    console.log('form data', this.patient);    
  }
}
