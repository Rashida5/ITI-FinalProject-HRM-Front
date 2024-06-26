import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import{FormsModule} from '@angular/forms'

import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[];
  EnteredID!:number;
  pageNumber: number = 0; // Initial page number
  pageSize: number = 5; // Number of items per page

  constructor(private employeeService: EmployeeService,  private router: Router) {
    this.employees=[];

   }

  ngOnInit(): void {

    // this.employees = [
    //   { "id":1,fname: 'John', lname: 'Doe', email: 'john@example.com', salary: 50000, department: 'IT', designation: 'Developer' },

    // ];

    this.getEmployees();
  }


  goToEmployee(){


    console.log(this.EnteredID);
    this.router.navigate(['details-of-employee',this.EnteredID]);
  }

  getEmployees(){
    this.employeeService.getEmployeesList(this.pageNumber,this.pageSize).subscribe(data => {this.employees = data;});


  }

  updateEmployee(id: number){
    this.router.navigate(['updating-by-id', id]);
  }




  deleteEmployee(id: number): void {
    if (confirm("Are you sure to delete Employee ID: " + id)) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: (data) => {
          console.log('Employee deleted successfully', data);
          // Handle successful deletion here (e.g., update UI)
          this.getEmployees();
        },
        error: (error) => {
          console.error('Error deleting employee', error);
          this.getEmployees();
          // Handle error here
        }
      });
    }
  }



  detailsOfEmployee(id: number){
    this.router.navigate(['details-of-employee', id]);
  }

  loadEmployees(): void {
    this.employeeService.getEmployeesList(this.pageNumber, this.pageSize)
      .subscribe(employees => this.employees = employees);
  }


  previousPage(): void {
    if (this.pageNumber > 0) {
      this.pageNumber--;
      this.loadEmployees();
    }
  }

  nextPage(): void {
    this.pageNumber++;
    this.loadEmployees();
  }
}
