import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BonusDto } from '../models/BonusDto';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BonusService {
  private baseURL = `http://localhost:8222/api/v1/vacations/bonus`;

  constructor(private httpClient: HttpClient) {}

  getSumOfBonuses(empId: number, year?: number, month?: number): Observable<number> {
    let params = new HttpParams();
    if (year !== undefined) params = params.set('year', year.toString());
    if (month !== undefined) params = params.set('month', month.toString());
    return this.httpClient.get<number>(`${this.baseURL}/sum/${empId}`, { params });
  }

  addBonus(bonus: BonusDto): Observable<BonusDto> {
    return this.httpClient.post<BonusDto>(this.baseURL, bonus);
  }

  updateBonus(id: number, bonus: BonusDto): Observable<BonusDto> {
    return this.httpClient.patch<BonusDto>(`${this.baseURL}/${id}`, bonus);
  }

  deleteBonusById(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseURL}/${id}`);
  }

  deleteAllBonusesForMonthAndYear(year: number, month: number): Observable<string> {
    let params = new HttpParams().set('year', year.toString()).set('month', month.toString());
    return this.httpClient.delete<string>(`${this.baseURL}/allInMonth`, { params });
  }

  deleteAllBonusesByEmpId(empId: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseURL}/employee/${empId}`);
  }

  deleteAllBonuses(): Observable<string> {
    return this.httpClient.delete<string>(this.baseURL);
  }

  deleteAllBonusesForYear(year: number): Observable<string> {
    let params = new HttpParams().set('year', year.toString());
    return this.httpClient.delete<string>(`${this.baseURL}/allInYear`, { params });
  }

  getAllBonusesForEmployee(empId: number, year?: number, month?: number): Observable<BonusDto[]> {
    let params = new HttpParams();
    if (year !== undefined) params = params.set('year', year.toString());
    if (month !== undefined) params = params.set('month', month.toString());
    return this.httpClient.get<BonusDto[]>(`${this.baseURL}/employee/${empId}`, { params });
  }

  getAllBonuses(): Observable<BonusDto[]> {
    return this.httpClient.get<BonusDto[]>(this.baseURL);
  }
}
