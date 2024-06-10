import { Component } from '@angular/core';
import { AddPatientFormComponent } from '../add-patient-form/add-patient-form.component';
import { Patient } from '../../types';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../../services/patients.service';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-patient',
  standalone: true,
  imports: [AddPatientFormComponent, NgIf],
  templateUrl: './edit-patient.component.html',
  styleUrl: './edit-patient.component.css'
})
export class EditPatientComponent {
  public data?: {};
  patient:Patient = {} as Patient;
  id: string = '';
  patientForm:FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    dateOfBirth: ['', [Validators.required]],
    contactInfo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    referralReason: ['', Validators.required],
    referralStatus: ['', [Validators.required]],
  })
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private patientService: PatientsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL   
      this.patientService.getPatientById(this.id).subscribe(data => {
        this.patient = data;
        console.log('data from edit', this.patient);

        this.patientForm.value.name = this.patient.name;
      })
    })  
  }
}
