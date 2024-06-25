import { Component } from '@angular/core';
import { VacationService } from '../services/vacation.service';
import { VacationDto } from '../models/VacationDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacation-list.component.html',
  styleUrls: ['./vacation-list.component.css']
})
export class VacationListComponent {


  vacations: VacationDto[];
  enteredID: string = '';
  pageNumber: number = 0; // Initial page number
  pageSize: number = 5; // Number of items per page

  constructor(private vacationService: VacationService, private router: Router) {
    this.vacations = [];
  }


  ngOnInit() {
    this.getAllVacations();
  }

  getAllVacations(){
    this.vacationService.getVacations().subscribe(data => {
      console.log(data); // Handle your data here
      this.vacations = data;
    });
  }

  addNewVacation() {
    this.goToAddVactionPage();
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

  deleteVacation(vacationId: number | undefined): void {
    if (vacationId != null) {
      this.vacationService.deleteVacation(vacationId).subscribe({
        next: (response) => {
          console.log('Vacation deleted successfully', response);
          // Handle successful deletion here (e.g., update UI)
          this.getAllVacations();
        },
        error: (error) => {
          console.error('Error deleting vacation', error);
          // Handle error here
        }
      });
    } else {
      console.log('Vacation ID is undefined');
    }
  }

  goToAddVactionPage() {
    this.router.navigate(['/add-vacation']);
  }

  searchVacationByEmployeeId() {
    if (this.enteredID.trim() !== '') {
      const empId = Number(this.enteredID);
      this.vacationService.getAllVacationForEmployee(empId).subscribe(data => {
        if (data.length === 0) {
          alert('There is no vacation for this employee.');
        } else {
          console.log("search "+data);
          this.vacations = data;
        }
      });
    } else {
      this.getAllVacations();
    }
  }
}
