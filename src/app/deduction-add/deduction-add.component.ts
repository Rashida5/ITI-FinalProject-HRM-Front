import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DeductionDto } from '../models/DeductionDto';
import { Router } from '@angular/router';
import { DeductionService } from '../services/deduction.service';

@Component({
  selector: 'app-deduction-add',
  templateUrl: './deduction-add.component.html',
  styleUrls: ['./deduction-add.component.css']
})
export class DeductionAddComponent {
  newDeduction: DeductionDto = new DeductionDto(0, 0, 0, '', new Date());

  constructor(
    private deductionService: DeductionService,
    private router: Router
  ) {}

  addNewDeduction(form: NgForm) {
    if (form.valid) {
      this.deductionService.addDeduction(this.newDeduction).subscribe(
        data => {
          console.log('Deduction added successfully', data);
          this.goToDeductionList();
        },
        error =>{ console.error('Error adding deduction', error)
            this.goToDeductionList();
        }
      );
    }
  }

  goToDeductionList() {
    this.router.navigate(['/deduction']);
  }

  cancelAddDeduction() {
    this.newDeduction = new DeductionDto(0, 0, 0, '', new Date()); // Reset form
  }
}
