import { Component } from '@angular/core';
import { AddPatientFormComponent } from '../add-patient-form/add-patient-form.component';
import { Patient } from '../../types';
import { Router,ActivatedRoute } from '@angular/router';
import { PatientsService } from '../../services/patients.service';



@Component({
  selector: 'app-edit-patient',
  standalone: true,
  imports: [AddPatientFormComponent],
  templateUrl: './edit-patient.component.html',
  styleUrl: './edit-patient.component.css'
})
export class EditPatientComponent {
  public data: {} | undefined;
  patient?:Patient;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']; // Access the 'id' parameter from the URL
    })
   
     this.patientService.getPatientById(this.id).subscribe(data => {
        this.patient = data;
        console.log('data from edit', this.patient);
        
     })



}
}
