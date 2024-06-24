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
  private baseURL="http://localhost:8222/api/v1/employees/employees";
// private baseURL = "http://localhost:7474/employees"
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
    return this.httpClient.post(`${this.baseURL}`,this.mapEmployeeToEmployeeDto( employee));
  }

  getEmployeeById(id: number): Observable<Employee>{
  //  return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    return this.httpClient.get<EmployeeDto>(`${this.baseURL}/${id}`).pipe(
      map(employeeDto => this.mapEmployeeDtoToEmployee(employeeDto))
    );
  }


  updateEmployee(id: number, employee: Employee): Observable<Object>{
  //  var Data = this.mapEmployeeToEmployeeDto(employee);
    return this.httpClient.put(`${this.baseURL}/${id}`, this.mapEmployeeToEmployeeDto(employee));
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
    employee.phoneNumber = employeeDto.phoneNumber;
    employee.mangerId = employeeDto.managerId;
    employee.salary = 0; // Default value since it's not available in EmployeeDto
    employee.department = employeeDto.departmentName; // Placeholder, adjust based on actual data if available
    employee.designation = employeeDto.jobTitle; // Placeholder, adjust based on actual data if available
    employee.joiningDate = datePipe.transform(employeeDto.startDate, 'yyyy-MM-dd') || '';
    employee.employmentStatus = employeeDto.employmentStatus;
    employee.country = employeeDto.country;
    employee.city = employeeDto.city;
    employee.state = employeeDto.state;
    employee.street = employeeDto.street;
    employee.zipCode = employeeDto.zipCode;
    return employee;
  }
  mapEmployeeToEmployeeDto(employee: Employee): EmployeeDto {
    const employeeDto = new EmployeeDto();
    const datePipe = new DatePipe('en-US');

  //  employeeDto.employeeId = employee.id;
    employeeDto.firstName = employee.fname;
    employeeDto.lastName = employee.lname;
    employeeDto.email = employee.email;
    employeeDto.phoneNumber = employee.phoneNumber;
    employeeDto.employmentStatus = employee.employmentStatus;
    employeeDto.startDate = new Date(employee.joiningDate); // Converting string to Date
    employeeDto.endDate = new Date(employee.joiningDate); // Converting string to Date
    employeeDto.managerId = employee.mangerId;
    employeeDto.jobId = employee.jobId;
    employeeDto.departmentId = employee.departmentId;
  //  employeeDto.departmentName = employee.department;
   // employeeDto.jobTitle = employee.designation;
    employeeDto.country = employee.country;
    employeeDto.city = employee.city;
    employeeDto.state = employee.state;
    employeeDto.street= employee.street;
    employeeDto.zipCode = employee.zipCode;
    console.log(employeeDto);
    return employeeDto;
  }
}

