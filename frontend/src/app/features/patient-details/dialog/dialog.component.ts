import { Component } from '@angular/core';
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
  

  patients!: Patient[];


  constructor(public dialogRef: MatDialogRef<DialogComponent>, private patientService:PatientsService, private route: ActivatedRoute,){}

  ngOnInit(){
 
  }
  

}
