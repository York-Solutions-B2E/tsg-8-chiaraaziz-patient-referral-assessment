import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Patient } from '../../types';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { response } from 'express';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  patients: Patient[] = [];

  constructor(private dashboardService: DashboardService){}

  ngOnInit(){
   this.dashboardService.getPatients().subscribe(response => {
    this.patients = response;
    console.log(this.patients);
    
   })
  }

}
