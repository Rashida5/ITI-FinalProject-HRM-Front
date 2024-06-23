export class DeductionDto {
    id: number;
    empId: number;
    amount: number;
    reason: string;
    deductionDate: Date;
  
    constructor(
      id: number,
      empId: number,
      amount: number,
      reason: string,
      deductionDate: Date
    ) {
      this.id = id ?? 0;
      this.empId = empId ?? 0;
      this.amount = amount ?? 0;
      this.reason = reason ?? '';
      this.deductionDate = deductionDate ?? new Date();
    }
  }
  