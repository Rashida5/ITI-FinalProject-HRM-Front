import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {map, Observable} from 'rxjs';
import { Employee } from '../models/employee';
import {EmployeeDto} from "../models/EmployeeDto";
import { DatePipe } from '@angular/common';
import {DepartmentDto} from "../models/DepartmentDto";
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  //private baseURL="http://localhost:8222/api/v1/employees/departments";
  private baseURL = "http://localhost:7474/departments";
  constructor(private httpClient: HttpClient ) {

  }
  getDepartmentList(): Observable<DepartmentDto[]>{
     return this.httpClient.get<DepartmentDto[]>(`${this.baseURL}`);

  }

}
