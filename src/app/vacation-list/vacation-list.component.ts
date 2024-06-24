import { Component } from '@angular/core';
import { VacationService } from '../services/vacation.service';
import { VacationDto } from '../models/VacationDto';

@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.css']
})
export class VacationListComponent {
addNewVacation() {
throw new Error('Method not implemented.');
}

  vacations: VacationDto[];
  pageNumber: number = 0; // Initial page number
  pageSize: number = 5; // Number of items per page

  constructor(private vacationService: VacationService) {
    this.vacations = [];
  }


  ngOnInit() {
    this.vacationService.getVacations().subscribe(data => {
      console.log(data); // Handle your data here
      this.vacations = data;
    });
  }

  addVacation(vacation: any) {
    this.vacationService.addVacation(vacation).subscribe(result => {
      console.log(result); // Handle the result here
    });
  }


  previousPage(): void {
    if (this.pageNumber > 0) {
      this.pageNumber--;
    }
  }

  nextPage(): void {
    this.pageNumber++;
  }

  deleteVacation(vacationId: number|undefined) {
    console.log(vacationId+ "deleted");
    this.vacationService.deleteVacation(vacationId)
  }
}
