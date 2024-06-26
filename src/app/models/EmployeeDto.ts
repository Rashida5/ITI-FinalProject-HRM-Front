// import { DatePipe } from '@angular/common';
export class EmployeeDto {
  employeeId!:number;
  firstName!: string;
  lastName!: string;
  email!: string;
  phoneNumber!: string;
  employmentStatus!: string;
  startDate!: Date;
  endDate!: Date;
  managerId!: number;
  jobId!: number;
  departmentId!: number;
  departmentName!: string;
  jobTitle!: string;
  city!:string;
  state!:string;
  country!:string;
  street!:string;
  zipCode!:string;
  currentSalary!: number;
constructor() {
}
  // constructor(
  //
  //   firstName: string,
  //   lastName: string,
  //   email: string,
  //   phoneNumber: string,
  //   employmentStatus: string,
  //   startDate: Date,
  //   endDate: Date,
  //   managerId: number,
  //   jobId: number,
  //   departmentId: number,
  //   departmentName:string,
  //   jobTitle:string
  // ) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  //   this.phoneNumber = phoneNumber;
  //   this.employmentStatus = employmentStatus;
  //   this.startDate = startDate;
  //   this.endDate = endDate;
  //   this.managerId = managerId;
  //   this.jobId = jobId;
  //   this.departmentId = departmentId;
  //   this.departmentName = departmentName;
  //   this.jobTitle = jobTitle;
  // }
}
