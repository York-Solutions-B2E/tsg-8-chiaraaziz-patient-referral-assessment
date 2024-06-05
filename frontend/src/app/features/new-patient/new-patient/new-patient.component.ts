import { Component } from '@angular/core';
import { PatientDataFormComponent } from '../../patient-data-form/patient-data-form/patient-data-form.component';

@Component({
  selector: 'app-new-patient',
  standalone: true,
  imports: [PatientDataFormComponent],
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.css'
})
export class NewPatientComponent {

}
