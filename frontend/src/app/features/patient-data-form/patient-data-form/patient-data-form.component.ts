import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardActions} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';



@Component({
  selector: 'app-patient-data-form',
  standalone: true,
  imports: [FormsModule,MatButtonModule, MatFormFieldModule, NgIf, ReactiveFormsModule, MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatDatepickerModule, MatCardActions],
  templateUrl: './patient-data-form.component.html',
  styleUrl: './patient-data-form.component.css'
})
export class PatientDataFormComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      dateOfBirth: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      referralReason: ['', Validators.required],
      referralStatus: ['', [Validators.required]],
    })
  }

  submit(): void {
    if(!this.userForm?.valid){
      return;
    }
    console.log('Form data:', this.userForm.value);
  }

}
