import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import {DepartmentService} from "../services/department.service";
import {DepartmentDto} from "../models/DepartmentDto";
import {JobService} from "../services/job.service";
import {JobDto} from "../models/JobDto";





@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
  ,
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent //implements OnInit//
{
  departments: DepartmentDto[] = [];
  jobs: JobDto[] = [];
  constructor(
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private jobService: JobService,
    private router: Router,

  ) {


  }

  loadDepartments(): void {
    this.departmentService.getDepartmentList().subscribe(
      data => this.departments = data,
      error => console.error('Error fetching departments', error)
    );
  }
  fetchJobs(): void {
    this.jobService.getJobList().subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        console.error('Error fetching jobs', error);
      }
    );
  }
  submitform!: NgForm;
  private baseURL = "http://localhost:8080/api/v1/employees";
  employee: Employee = new Employee();





  saveEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/show-all-employees']);
  }

  ngOnInit(): void {
    this.loadDepartments();
    this.fetchJobs();
  }
  onSubmit() {
    console.log(this.employee);


    this.saveEmployee();
  }


}









