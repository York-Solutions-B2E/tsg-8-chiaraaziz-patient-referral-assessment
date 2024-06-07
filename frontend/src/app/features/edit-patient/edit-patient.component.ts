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
  patient?:Patient;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.patient = fakeMyListings.find(listing => listing.id === id);

  }

}
