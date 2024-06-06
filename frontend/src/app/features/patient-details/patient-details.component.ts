import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { Patient } from '../../types';
import { PatientsService } from '../../services/patients.service';
import { MatButton } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';


@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterLink, MatCardModule, MatButton, MatDialogModule],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent {
  patients!: Patient[];

  patient!: Patient;
  id!: string;
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(
    private patientService: PatientsService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ){}

  ngOnInit(){
    
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL
      console.log('id to delete:', this.id);})
   
    this.patientService.getPatientById(this.id!).subscribe(response => {
      this.patient = response;
      console.log(this.patient);
    })
  }
  onDeleteClicked(id: string): void{
    this.patientService.deletePatientById(id).subscribe(() => {
      this.patients = this.patients.filter(patient => patient.id !== id);
    })
  } 

}