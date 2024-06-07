import { Component } from '@angular/core';
import { AddPatientFormComponent } from '../add-patient-form/add-patient-form.component';

@Component({
  selector: 'app-new-patient',
  standalone: true,
  imports: [AddPatientFormComponent],
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.css'
})
export class NewPatientComponent {

}
