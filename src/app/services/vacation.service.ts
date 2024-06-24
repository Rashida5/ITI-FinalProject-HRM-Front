import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


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
    console.log("delete request "+ vacationId);
  
    console.log(`${this.apiUrl}/${vacationId}`);
    return this.http.delete<string>(`${this.apiUrl}/${vacationId}`);
  }
}
