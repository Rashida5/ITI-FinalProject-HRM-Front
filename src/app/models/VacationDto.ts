

export class VacationDto  {
  id?: number;
  empId: number;
  reason: string;
  vacationDate: Date;

  constructor(empId: number, reason: string, vacationDate: Date, id?: number) {
    this.empId = empId;
    this.reason = reason;
    this.vacationDate = vacationDate;
    this.id = id;
  }
}