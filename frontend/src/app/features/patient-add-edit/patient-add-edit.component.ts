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
    if (isFormValid && !this.isEdit) {
      this.isFormSubmitted  =true;
      this.patient.name = this.patientForm.value.name;
      this.patient.dateOfBirth = this.patientForm.value.dateOfBirth;
      this.patient.contactInfo = this.patientForm.value.contactInfo;
      this.patient.referralReason = this.patientForm.value.referralReason;
      this.patient.referralStatus = this.patientForm.value.referralStatus;
      this.patient.createdAt = new Date();
      this.patient.updatedAt = new Date();
      this.patientService.addPatient(this.patient).subscribe(() => {this.router.navigateByUrl('/dashboard')});
      
    } else if (isFormValid && this.isEdit){
      this.isFormSubmitted  =true;
      this.patient.updatedAt = new Date();
      this.patient = Object.assign(this.patient, this.patientForm.value);
      this.patientService.updatePatient(this.patient.id, this.patient).subscribe(() => {this.router.navigateByUrl('/dashboard')});
      debugger;
      console.log('edit data', this.patient);
      
    } else {
      this.isFormSubmitted = false;
    }

    
    // if (this.isEdit) {
    //   this.patient.updatedAt = new Date();
    //   this.patientService.updatePatient(this.patient.id, this.patient).subscribe(() => {this.router.navigateByUrl('/dashboard')});
    //   console.log('edit data', this.patient);
      
  
    // } else {
    //   this.patientService.addPatient(this.patient).subscribe(() => {this.router.navigateByUrl('/dashboard')});
       
    // }
    // if (this.patientForm.valid) {
    //   console.log('Form is ok');
      
    // } else {
    //   Object.keys(this.patientForm).forEach(field => {
    //     const control = this.patientForm.get(field);
    //     control?.markAllAsTouched({});
    //   })
    // }

    // for (let controller in this.patientForm.controls) {
    //   this.patientForm.get(controller)?.markAsTouched();
    // }
    // if (this.patientForm.valid) {
    //   console.log('form OK');
      
    // } else {
    //   console.log("Form not ok");
      
    // }
  }
}
