import { Component } from '@angular/core';
import { DeductionService } from '../services/deduction.service';
import { Router } from '@angular/router';
import { DeductionDto } from '../models/DeductionDto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deduction-list',
  templateUrl: './deduction-list.component.html',
  styleUrls: ['./deduction-list.component.css']
})
export class DeductionListComponent {
  deductions: DeductionDto[];
  enteredID: string = '';

  constructor(private deductionService: DeductionService, private router: Router) {
    this.deductions = [];
  }

  ngOnInit(): void {
    this.getDeductions();
  }

  getDeductions() {
    this.deductionService.getAllDeductions().subscribe(data => {
      this.deductions = data;
    });
  }

  updateDeduction(id: number) {
    this.router.navigate(['update-deduction', id]);
  }

  deleteDeduction(id: number) {
    if (confirm("Are you sure to delete Deduction ID: " + id)) {
      this.deductionService.deleteDeductionById(id).subscribe(data => {
        console.log(data);
        this.getDeductions();
      });
    }
  }

  addNewDeduction() {
    this.router.navigate(['add-deduction']);
    console.log('Add New Deduction button clicked');
  }

  isSameOrFutureMonth(dateInput: any): boolean {
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) {
      console.error('Invalid date format:', dateInput);
      return false;
    }
    const today = new Date();

    // Check if the year is the same or in the future
    if (date.getFullYear() > today.getFullYear()) {
      return true;
    } else if (date.getFullYear() === today.getFullYear()) {
      // If the year is the same, check if the month is the same or in the future
      return date.getMonth() >= today.getMonth();
    } else {
      // The year is in the past
      return false;
    }
  }

  searchDeductionsByEmployeeId() {
    if (this.enteredID.trim() !== '') {
      const empId = Number(this.enteredID);
      this.deductionService.getAllDeductionsForEmployee(empId).subscribe(data => {
        this.deductions = data;
      });
    } else {
      this.getDeductions();
    }
  }

  deleteCurrentMonthDeductions() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Month is 0-based in JavaScript Date object

    if (confirm(`Are you sure you want to delete all deductions for ${year}-${month}?`)) {
      this.deductionService.deleteAllDeductionsForMonthAndYear(year, month).subscribe(data => {
        console.log(data);
        this.getDeductions();
      });
    }
  }
}
