import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
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

  baseUrl: string = 'http://localhost:8080/patient';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/all`)
  }

  getPatientById(id:string): Observable<Patient>{
    return this.http.get<Patient>(`${this.baseUrl}/${id}`)
      .pipe(catchError(
        (error) => {
          // pop my toast here
          alert('err')
          return of({} as Patient)
        }
      ))
  }

  deletePatientById(id:string): Observable<Patient> {
    return this.http.delete<Patient>(`${this.baseUrl}/${id}`)
  }

  //adds a patient 
  addPatient(patient: Patient): Observable<Patient>{
    return this.http.post<Patient>(this.baseUrl, patient, httpOptions)
  }
  // handelError(arg0: string, patient: Patient): (err: any, caught: Observable<Patient>) => import("rxjs").ObservableInput<any> {
  //   throw new Error('Could not add Patient at this time');
  // }

  updatePatient(id:string, patient:Patient): Observable<Patient> {    
    debugger;
    return this.http.put<Patient>(`${this.baseUrl}/${id}`, patient, httpOptions);
  }
}
