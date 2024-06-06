import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Patient } from '../../types';
import { NewPatientFormService } from '../../services/new-patient-form.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports:[ReactiveFormsModule, NgIf, NewPatientFormService],
  standalone:true
})
export class ReactiveFormComponent {
  patient: Patient = {
    id:'',
    name: '',
    dateOfBirth:'',
    contactInfo:'',
    referralReason:'',
    referralStatus:'',
    createdAt: '',
    updatedAt: ''
  };
  

  patientForm = this.formBuilder.group({
    name: ['', Validators.required],
    dateOfBirth:['', [Validators.required]],
    contactInfo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    referralReason:['',Validators.required],
    referralStatus:['',Validators.required]
  })
  

  constructor(private formBuilder: FormBuilder, private newPatientFormService newPatientFormService) {}

  formData():any {
    return this.patientForm.value
  }
  onSubmit({name, dateOfBirth, contactInfo, referralReason, referralStatus}): void {
    name =this.formData().name;
    this.patient.dateOfBirth = this.formData().dateOfBirth;
    this.patient.contactInfo = this.formData().contactInfo;
    this.patient.referralReason = this.formData().referralReason;
    this.patient.referralStatus = this.formData().referralStatus;
    // this.patient.name =this.formData().name;
    // this.patient.dateOfBirth = this.formData().dateOfBirth;
    // this.patient.contactInfo = this.formData().contactInfo;
    // this.patient.referralReason = this.formData().referralReason;
    // this.patient.referralStatus = this.formData().referralStatus;
    console.log(this.patientForm.value);
    this.newPatientFormService.addPatient.(name, dateOfBirth,)
    
  }
  ngOnInit(){
    // this.NewPatientFormService.createListing(n).subscribe(response => {
    //  this.patients = response;
    //  console.log(this.patients);
     
    // })
   }

  
  
  

  


  
}