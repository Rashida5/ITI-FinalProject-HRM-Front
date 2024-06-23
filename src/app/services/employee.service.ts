import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {map, Observable} from 'rxjs';
import { Employee } from '../models/employee';
import {EmployeeDto} from "../models/EmployeeDto";
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  //private baseURL = "http://localhost:8080/api/v1/employees";
  private baseURL="http://localhost:7474/employees";
  constructor(private httpClient: HttpClient ) { }

  getEmployeesList(page:number , size:number): Observable<Employee[]>{
   // return this.httpClient.get<Employee[]>(`${this.baseURL}`);

    // return this.httpClient.get<EmployeeDto[]>(`${this.baseURL}/1`).pipe(
    //   map(employeeDtos => employeeDtos.map(this.mapEmployeeDtoToEmployee.bind(this)))
    // );
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.httpClient.get<any>(this.baseURL, { params }).pipe(
      map((response: any) => {
        return response.content.map((employeeDto: any) => {
          return this.mapEmployeeDtoToEmployee(employeeDto);
        });
      })
    );
  }

  addEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
  //  return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    return this.httpClient.get<EmployeeDto>(`${this.baseURL}/${id}`).pipe(
      map(employeeDto => this.mapEmployeeDtoToEmployee(employeeDto))
    );
  }


  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  mapEmployeeDtoToEmployee(employeeDto: EmployeeDto): Employee {
    const employee = new Employee();
    const datePipe = new DatePipe('en-US');

    employee.id = employeeDto.employeeId;
    employee.fname = employeeDto.firstName;
    employee.lname = employeeDto.lastName;
    employee.email = employeeDto.email;
    employee.salary = 0; // Default value since it's not available in EmployeeDto
    employee.department = employeeDto.departmentName; // Placeholder, adjust based on actual data if available
    employee.designation = employeeDto.jobTitle; // Placeholder, adjust based on actual data if available
    employee.joiningDate = datePipe.transform(employeeDto.startDate, 'yyyy-MM-dd') || '';

    return employee;
  }
}

