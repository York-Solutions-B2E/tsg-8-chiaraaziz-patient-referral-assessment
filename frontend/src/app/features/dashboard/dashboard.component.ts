import { Component, Inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Patient } from '../../types';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PatientsService } from '../../services/patients.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { AuthState, OktaAuth } from '@okta/okta-auth-js';
import { Observable, filter, map } from 'rxjs';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, FormsModule, MatChipsModule, NgIf, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  //these are for Okta
  public isAuthenticated$!: Observable<boolean>;
  public name$!: Observable<string>;
  
  patients: Patient[] = [];
  patient!: Patient;
  id!: string;

  constructor(private dashboardService: DashboardService,
    private patientService: PatientsService,
    private route: ActivatedRoute,
    private _oktaStateService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth
  ){}

  ngOnInit(){
   this.dashboardService.getPatients().subscribe(patients => {
    this.patients = patients;
   });
   this.isAuthenticated$ = this._oktaStateService.authState$.pipe(
    filter((s: AuthState) => !!s),
    map((s: AuthState) => s.isAuthenticated ?? false)
  );

   
  }

  public async signIn() : Promise<void> {
    await this._oktaAuth.signInWithRedirect();
  }

  public async signOut(): Promise<void> {
    await this._oktaAuth.signOut();
  }
  
  


}
