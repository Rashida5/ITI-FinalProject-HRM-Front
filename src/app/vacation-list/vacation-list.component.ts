import { Component } from '@angular/core';
import { VacationService } from '../services/vacation.service';

@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.css']
})
export class VacationListComponent {
  // vacations: any[]; 
  pageNumber: number = 0; // Initial page number
  pageSize: number = 5; // Number of items per page

  constructor(private vacationService: VacationService) { }


  ngOnInit() {
    this.vacationService.getVacations().subscribe(data => {
      console.log(data); // Handle your data here
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
}
