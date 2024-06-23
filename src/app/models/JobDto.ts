export class JobDto {
  jobId: number;
  jobTitle:string;
  minSalary: number;
  maxSalary:number;
  existed: boolean;
  numberOfEmployees:number;
  employeeIds: number[];

  constructor(
    jobId: number,
    jobTitle:string,
    minSalary: number,
    maxSalary:number,
    existed: boolean,
    numberOfEmployees:number,
    employeeIds: number[]
  ) {
    this.jobId = jobId ?? 0;
    this.jobTitle = jobTitle ?? '';
    this.minSalary = minSalary ?? 0;
    this.maxSalary = maxSalary ?? 0;
    this.numberOfEmployees = numberOfEmployees??0;
    this.employeeIds = employeeIds ?? [];
    this.existed = existed ?? true;
  }
}
