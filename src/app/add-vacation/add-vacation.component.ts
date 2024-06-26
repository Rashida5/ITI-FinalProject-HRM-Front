import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VacationDto } from '../models/VacationDto';
import { VacationService } from '../services/vacation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vacation',
  templateUrl: './add-vacation.component.html',
  styleUrls: ['./add-vacation.component.css']
})
export class AddVacationComponent {
  newVacation: VacationDto = new VacationDto(0, '',new Date(), 0);

  constructor(private vacationService: VacationService, private router: Router) {

  }

addNewVacation(form: NgForm) {
  if (form.valid) {
    this.vacationService.addVacation(this.newVacation).subscribe(
      data => {
        console.log('Vacation added successfully', data);
        this.goToVacationList();
      },
      error => {
        console.error('Error adding Vacation', error)
        this.goToVacationList();
      }    );
  }
}

goToVacationList() {
  this.router.navigate(['/vacations']);
}

cancelAddVacation() {
  this.newVacation = new VacationDto(0, '',new Date(), 0);
}

}
