import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Patient } from '../../types';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PatientsService } from '../../services/patients.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  patients: Patient[] = [];
  patient!: Patient;
  id!: string;

  constructor(private dashboardService: DashboardService,
    private patientService: PatientsService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(){
   this.dashboardService.getPatients().subscribe(patients => {
    this.patients = patients;
    console.log(this.patients);
    
   })

   
  }
  
  


}
