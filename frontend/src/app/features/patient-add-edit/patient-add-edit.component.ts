import { Component, Input, OnInit } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Patient } from '../../types';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-patient-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HeaderComponent],
  templateUrl: './patient-add-edit.component.html',
  styleUrl: './patient-add-edit.component.css'
})
export class PatientAddEditComponent implements OnInit {
  @Input() buttonText: string = 'Save';
 
  referralReason = new FormControl('');
  referralStatus = new FormControl('');
  patient:Patient = {} as Patient;
  id: string = '';
  isFormSubmitted = false;
  isAllTouched = false;


    patientForm:FormGroup = this.formBuilder.group({
    name: new FormControl('',[Validators.required]),
    dateOfBirth: new FormControl('',[Validators.required]),
    contactInfo: new FormControl('',[Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]),
    referralReason : new FormControl('',[Validators.required]),
    referralStatus: new FormControl('', [Validators.required]),
    noteText: new FormControl('')
    })

 
//checking to see if there is an id - there should always be an id for edit
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
    //edit 
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL
      if (this.isEdit) {
        this.patientService.getPatientById(this.id).subscribe(data => {
          this.patient = data;
          console.log('data from edit', this.patient);

          //sets the data from the server in the form
          this.patientForm.controls['name'].setValue(this.patient.name);
          this.patientForm.controls['dateOfBirth'].setValue(this.patient.dateOfBirth);
          this.patientForm.controls['contactInfo'].setValue(this.patient.contactInfo);
          this.patientForm.controls['referralReason'].setValue(this.patient.referralReason);
          this.patientForm.controls['referralStatus'].setValue(this.patient.referralStatus);
          
          

        });
        //add patient so you need a new patient object
      } else {
        this.patient = {} as Patient;
      }
    })  
  }

  onDropDownChange(){
    this.patient.referralReason = this.patientForm.value.referralReason;
    this.patient.referralStatus = this.patientForm.value.referralStatus;    
  }
  
  onSubmit():void {

    const isFormValid = this.patientForm.valid;
    this.isFormSubmitted  = true;
    if (isFormValid) {
      this.patient = Object.assign(this.patient, this.patientForm.value);
      if (!this.isEdit) {
        this.patientService.addPatient(this.patient).subscribe((p) => {
          this.router.navigate(['patient', p.id])
        });      
      } else {
        this.patientService.updatePatient(this.patient.id, this.patient).subscribe(() => {
          this.router.navigate(['patient', this.patient.id])
        });
      }
    } else {
      this.isFormSubmitted = false;
    }
  }
}
