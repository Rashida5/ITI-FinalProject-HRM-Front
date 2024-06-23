import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import {DepartmentDto} from "../models/DepartmentDto";
import {JobDto} from "../models/JobDto";
import {DepartmentService} from "../services/department.service";
import {JobService} from "../services/job.service";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

    id: number;
  employee: Employee = new Employee();
  departments: DepartmentDto[] = [];
  jobs: JobDto[] = [];

  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService,
              private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router) {
      this.id=0
    }
    //loading the data into form
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadDepartments();
    this.fetchJobs();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));


  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/show-all-employees']);
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
}
