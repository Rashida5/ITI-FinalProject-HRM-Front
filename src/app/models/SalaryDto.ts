export class SalaryDto {
    id: number;
    empId: number;
    amount: number;
  
    constructor(
      id: number,
      empId: number,
      amount: number
    ) {
      this.id = id ?? 0;
      this.empId = empId ?? 0;
      this.amount = amount ?? 0;
    }
  }
  