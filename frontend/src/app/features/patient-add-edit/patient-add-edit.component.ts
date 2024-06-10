import { Component, Input, OnInit } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule, FormControlName, FormGroup } from '@angular/forms';
import { Patient } from '../../types';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-patient-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './patient-add-edit.component.html',
  styleUrl: './patient-add-edit.component.css'
})
export class PatientAddEditComponent implements OnInit {
  @Input() buttonText: string = 'Save';
  selectedReason: FormControl = new FormControl('');
  selectedStatus: FormControl = new FormControl('');
  patient:Patient = {} as Patient;
  id: string = '';
  patientForm:FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    dateOfBirth: ['', [Validators.required]],
    contactInfo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    referralReason: ['', Validators.required],
    referralStatus: ['', [Validators.required]],
  })

  get isEdit(): boolean {
    return this.id?.length > 0 || false;
  }
  
  get pageType(): string {
    return this.isEdit ? 'Edit' : 'Add';
  }
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientsService) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL
      if (this.isEdit) {
        this.patientService.getPatientById(this.id).subscribe(data => {
          this.patient = data;
          console.log('data from edit', this.patient);

          this.patientForm.controls['name'].setValue(this.patient.name);
        })
      } else {
        this.patient = {} as Patient;
      }
    })  
  }

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

    if (this.isEdit) {
      
      // call put
    } else {
      this.patientService.addPatient(this.patient).subscribe(() => {this.router.navigateByUrl('/dashboard')});
    }
    console.log('form data', this.patient);    
  }
}
