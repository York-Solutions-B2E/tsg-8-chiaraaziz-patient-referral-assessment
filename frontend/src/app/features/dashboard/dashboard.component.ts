import { Component, Inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Patient } from '../../types';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PatientsService } from '../../services/patients.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { AuthState, OktaAuth } from '@okta/okta-auth-js';
import { Observable, filter, map } from 'rxjs';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, FormsModule, MatChipsModule, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  
  patients: Patient[] = [];
  patient!: Patient;
  id!: string;

  constructor(private dashboardService: DashboardService,
    private patientService: PatientsService,
    private _router: Router,){}

  public ngOnInit(): void{
   
   
  this.dashboardService.getPatients().subscribe(patients => {
    this.patients = patients;
   });

   
  }


  
  


}
