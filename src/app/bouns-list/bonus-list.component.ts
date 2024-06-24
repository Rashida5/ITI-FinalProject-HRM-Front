import { Component } from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {Router} from "@angular/router";
import {BonusService} from "../services/bonus.service";
import {BonusDto} from "../models/BonusDto";
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-bouns-list',
  templateUrl: './bonus-list.component.html',
  styleUrls: ['./bonus-list.component.css']
})
export class BonusListComponent {
      bonus:BonusDto[];
  constructor(private bonusService: BonusService,  private router: Router) {
    this.bonus=[];

  }
  ngOnInit(): void {
    this.getBonus();
  }
  getBonus(){
    this.bonusService.getAllBonuses().subscribe(data => {this.bonus = data;});
  }
  updateBonus(id: number){
    this.router.navigate(['updating-by-id', id]);
  }




  deleteBonus(id: number){

    if(confirm("Are you sure to delete Bonus ID: "+id)){
      this.bonusService.deleteBonusById(id).subscribe( data => {
        console.log(data);
        this.getBonus();
      })}
  }
  addNewBonus() {
    // Logic to add a new bonus
    this.router.navigate(['add-bonus']);
    console.log('Add New Bonus button clicked');
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

}
