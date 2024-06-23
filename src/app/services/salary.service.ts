import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalaryDto } from '../models/SalaryDto';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  private baseURL = `http://localhost:8080/service2/v1/salary`;

  constructor(private httpClient: HttpClient) {}

  getSalaryById(id: number): Observable<SalaryDto> {
    return this.httpClient.get<SalaryDto>(`${this.baseURL}/${id}`);
  }

  getAllSalaries(): Observable<SalaryDto[]> {
    return this.httpClient.get<SalaryDto[]>(this.baseURL);
  }

  addSalary(salary: SalaryDto): Observable<SalaryDto> {
    return this.httpClient.post<SalaryDto>(this.baseURL, salary);
  }

  updateSalaryAmount(id: number, amount: number): Observable<SalaryDto> {
    let params = new HttpParams().set('amount', amount.toString());
    return this.httpClient.patch<SalaryDto>(`${this.baseURL}/${id}`, null, { params });
  }

  deleteSalary(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseURL}/${id}`);
  }

  getAllSalariesWithAmount(amount: number): Observable<SalaryDto[]> {
    let params = new HttpParams().set('amount', amount.toString());
    return this.httpClient.get<SalaryDto[]>(`${this.baseURL}/amount`, { params });
  }

  calculateNetSalary(empId: number, year: number, month: number): Observable<number> {
    let params = new HttpParams().set('year', year.toString()).set('month', month.toString());
    return this.httpClient.get<number>(`${this.baseURL}/netSalary/employee/${empId}`, { params });
  }
}
