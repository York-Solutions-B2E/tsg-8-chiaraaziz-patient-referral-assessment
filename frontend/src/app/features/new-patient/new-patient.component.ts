import { Component } from '@angular/core';
import { AddPatientFormComponent } from '../add-patient-form/add-patient-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-patient',
  standalone: true,
  imports: [AddPatientFormComponent, ReactiveFormsModule],
  templateUrl: './new-patient.component.html',
  styleUrl: './new-patient.component.css'
})
export class NewPatientComponent {

}
