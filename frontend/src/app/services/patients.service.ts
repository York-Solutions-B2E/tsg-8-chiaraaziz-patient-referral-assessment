import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Patient } from '../types';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  getPatientById(id:string): Observable<Patient>{
    return this.http.get<Patient>(`http://localhost:8080/patients/${id}`);
  }
  deletePatientById(id:string): Observable<Patient> {
    return this.http.delete<Patient>(`http://localhost:8080/patients/${id}`)
  }

  //adds a patient 
  addPatient(patient: Patient): Observable<Patient>{
    return this.http.post<Patient>('http://localhost:8080/patient/', patient, httpOptions).pipe(catchError(this.handelError('addPatient', patient)))
  }
  handelError(arg0: string, patient: Patient): (err: any, caught: Observable<Patient>) => import("rxjs").ObservableInput<any> {
    throw new Error('Could not add PAtient at this time');
  }
}
