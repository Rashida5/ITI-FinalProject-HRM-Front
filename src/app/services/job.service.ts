import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {DepartmentDto} from "../models/DepartmentDto";
import {JobDto} from "../models/JobDto";
@Injectable({
  providedIn: 'root'
})
export class JobService{
 private baseURL="http://localhost:8222/api/v1/employees/jobs";
 // private baseURL= "http://localhost:7474/jobs";
  constructor(private httpClient: HttpClient ) {

  }
  getJobList(): Observable<JobDto[]>{
    return this.httpClient.get<JobDto[]>(`${this.baseURL}`);
  }
}
