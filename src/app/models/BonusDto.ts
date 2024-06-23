export class BonusDto {
    id: number;
    empId: number;
    amount: number;
    reason: string;
    bonusDate: Date;
  
    constructor(
      id: number,
      empId: number,
      amount: number,
      reason: string,
      bonusDate: Date
    ) {
      this.id = id ?? 0;
      this.empId = empId ?? 0;
      this.amount = amount ?? 0;
      this.reason = reason ?? '';
      this.bonusDate = bonusDate ?? new Date();
    }
  }
  