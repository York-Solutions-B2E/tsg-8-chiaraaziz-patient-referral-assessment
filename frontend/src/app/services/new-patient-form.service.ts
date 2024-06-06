import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../types';
import { Observable, catchError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})



export class NewPatientFormService {

  constructor(private http:HttpClient) { }

  // addPatient(name: string, dateOfBirth: Date, contactInfo: string, referralReason: string, referralStatus:string): Observable<Patient> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  //   return this.http.post<Patient>('http://localhost:8080/patient', {name, dateOfBirth, contactInfo,referralReason, referralStatus}, {headers})
      
  // }

  addPatient(name:string, dateOfBirth: string, contactInfo: string, referralReason: string, referralStatus: string): Observable<Patient> {
    return this.http.post<Patient>('http://localhost:8080/patient', {name,dateOfBirth, contactInfo,referralReason,referralStatus}, httpOptions)
      
  }
  handleError(arg0: string, patient: Patient): (err: any, caught: Observable<Patient>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
}
