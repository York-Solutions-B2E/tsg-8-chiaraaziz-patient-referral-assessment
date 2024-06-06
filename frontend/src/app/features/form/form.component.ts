import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Patient } from '../../types';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports:[ReactiveFormsModule, NgIf],
  standalone:true
})
export class ReactiveFormComponent {
  // patient:Patient ={
  //   id: '',
  //   name: '',
  //   dateOfBirth: Date,
  //   contactInfo: '',
  //   reasonForReferral: '',
  //   referralStatus: '',
  //   createdAt: '',
  //   updatedAt: ''
  // }

  

  patientForm = this.formBuilder.group({
    name: ['', Validators.required],
    dateOfBirth:['', [Validators.required]],
    contactInfo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    referralReason:['',Validators.required],
    referralStatus:['',Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.log(this.patientForm.value);
    
  }
}