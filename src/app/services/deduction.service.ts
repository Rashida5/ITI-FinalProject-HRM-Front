import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeductionDto } from '../models/DeductionDto';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeductionService {
  private baseURL = `http://localhost:8222/api/v1/vacations/deduction`;

  constructor(private httpClient: HttpClient) {}

  getSumOfDeductions(empId: number, year?: number, month?: number): Observable<number> {
    let params = new HttpParams();
    if (year !== undefined) params = params.set('year', year.toString());
    if (month !== undefined) params = params.set('month', month.toString());
    return this.httpClient.get<number>(`${this.baseURL}/sum/${empId}`, { params });
  }

  addDeduction(deduction: DeductionDto): Observable<DeductionDto> {
    return this.httpClient.post<DeductionDto>(this.baseURL, deduction);
  }

  updateDeduction(id: number, deduction: DeductionDto): Observable<DeductionDto> {
    return this.httpClient.patch<DeductionDto>(`${this.baseURL}/${id}`, deduction);
  }

  deleteDeductionById(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseURL}/${id}`);
  }

  deleteAllDeductionsForMonthAndYear(year: number, month: number): Observable<string> {
    let params = new HttpParams().set('year', year.toString()).set('month', month.toString());
    return this.httpClient.delete<string>(`${this.baseURL}/allInMonth`, { params });
  }

  deleteAllDeductionsByEmpId(empId: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseURL}/employee/${empId}`);
  }

  deleteAllDeductions(): Observable<string> {
    return this.httpClient.delete<string>(this.baseURL);
  }

  deleteAllDeductionsForYear(year: number): Observable<string> {
    let params = new HttpParams().set('year', year.toString());
    return this.httpClient.delete<string>(`${this.baseURL}/allInYear`, { params });
  }

  getAllDeductionsForEmployee(empId: number, year?: number, month?: number): Observable<DeductionDto[]> {
    let params = new HttpParams();
    if (year !== undefined) params = params.set('year', year.toString());
    if (month !== undefined) params = params.set('month', month.toString());
    return this.httpClient.get<DeductionDto[]>(`${this.baseURL}/employee/${empId}`, { params });
  }

  getAllDeductions(): Observable<DeductionDto[]> {
    return this.httpClient.get<DeductionDto[]>(this.baseURL);
  }
}
