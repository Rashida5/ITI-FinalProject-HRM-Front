import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationService {
  
  private apiUrl = 'http://localhost:8222/api/v1/vacations/vacations'; 

  constructor(private http: HttpClient) { }

  getVacations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addVacation(vacation: any): Observable<any> {
    return this.http.post(this.apiUrl, vacation);
  }

  deleteVacation(vacationId: number|undefined): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${vacationId}`);
  }
}
