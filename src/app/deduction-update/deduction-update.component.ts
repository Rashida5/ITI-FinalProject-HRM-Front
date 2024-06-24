import { Component } from '@angular/core';
import { DeductionDto } from "../models/DeductionDto";
import { DeductionService } from "../services/deduction.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-deduction-update',
  templateUrl: './deduction-update.component.html',
  styleUrls: ['./deduction-update.component.css']
})
export class DeductionUpdateComponent {
  id: number;
  deduction: DeductionDto = new DeductionDto(0, 0, 0, '', new Date());

  constructor(
    private deductionService: DeductionService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.deductionService.getDeductionById(this.id).subscribe(
      data => {
        this.deduction = data;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.deductionService.updateDeduction(this.id, this.deduction).subscribe(
      data => {
        this.goToDeductionList();
      },
      error => console.log(error)
    );
  }

  goToDeductionList() {
    this.router.navigate(['/deduction']);
  }
}
