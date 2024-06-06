import { Component, Input } from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { PatientsService } from '../../../services/patients.service';
import { Patient } from '../../../types';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, RouterLink, MatDialogClose],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  // @Input()inputFromParent: string="";

  patients!: Patient[];

  // patient!: Patient;
  // id!: string;
  constructor(public dialogRef: MatDialogRef<DialogComponent>, private patientService:PatientsService, private route: ActivatedRoute,){}

  ngOnInit(){
  // this.route.params.subscribe(params => {
  //   this.id = params['id']; // Access the 'id' parameter from the URL
  //   console.log('id to delete:', this.id);})
  // console.log(this.inputFromParent);
  
  }
  

  // onDeleteClicked(inputFromParent: string): void{
  //   this.patientService.deletePatientById(inputFromParent).subscribe(() => {
  //     this.patients = this.patients.filter(patient => patient.id !== inputFromParent);
  //   })
  // } 
}
