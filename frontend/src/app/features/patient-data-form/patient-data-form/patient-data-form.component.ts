import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './patient-data-form.component.html',
  styleUrl: './patient-data-form.component.css'
})
export class PatientDataFormComponent {

}
