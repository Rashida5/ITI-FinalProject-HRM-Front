import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {BonusDto} from "../models/BonusDto";
import {Router} from "@angular/router";
import {BonusService} from "../services/bonus.service";
@Component({
  selector: 'app-bonus-add',
  templateUrl: './bonus-add.component.html',
  styleUrls: ['./bonus-add.component.css']
})
export class BonusAddComponent {
  newBonus: BonusDto = new BonusDto(0, 0, 0, '', new Date());

  constructor(
    private bonusService: BonusService,
    private router: Router
  ) {}
  addNewBonus(form: NgForm) {
    if (form.valid) {
      this.bonusService.addBonus(this.newBonus).subscribe(
        data => {
          console.log('Bonus added successfully', data);
          this.goToBonusList();
        },
        error => console.error('Error adding bonus', error)
      );
    }
  }

  goToBonusList() {
    this.router.navigate(['/bonus']);
  }

  cancelAddBonus() {
    this.newBonus = new BonusDto(0, 0, 0, '', new Date()); // Reset form
  }

}
