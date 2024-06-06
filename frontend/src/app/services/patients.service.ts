import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  getPatientById(id:string): Observable<Patient>{
    return this.http.get<Patient>(`/patients/${id}`);
  }
}
