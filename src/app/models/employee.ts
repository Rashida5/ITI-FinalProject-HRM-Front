import { DatePipe } from '@angular/common';

export class Employee {

    id!: number;
    fname!: string;
    lname!: string;
    email!: string;
    salary!: number;
    department: string;
    designation:string;
    joiningDate!: string;
  departmentId!:number;


  constructor() {
    this.email="@gmail.com";
    this.salary=0;
    this.department="";
    this.designation="";

}
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
//   employmentStatus: string;
//   startDate: Date;
//   endDate: Date;
//   managerId: number;
//   jobId: number;
//   departmentId: number;
//
//   constructor(
//     firstName: string,
//     lastName: string,
//     email: string,
//     phoneNumber: string,
//     employmentStatus: string,
//     startDate: Date,
//     endDate: Date,
//     managerId: number,
//     jobId: number,
//     departmentId: number
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.phoneNumber = phoneNumber;
//     this.employmentStatus = employmentStatus;
//     this.startDate = startDate;
//     this.endDate = endDate;
//     this.managerId = managerId;
//     this.jobId = jobId;
//     this.departmentId = departmentId;
//   }
}
