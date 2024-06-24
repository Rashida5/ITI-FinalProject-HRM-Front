import { Component } from '@angular/core';
import {BonusDto} from "../models/BonusDto";
import {BonusService} from "../services/bonus.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bonus-update',
  templateUrl: './bonus-update.component.html',
  styleUrls: ['./bonus-update.component.css']
})
export class BonusUpdateComponent {
  id: number;
  bonus: BonusDto = new BonusDto(0, 0, 0, '', new Date());

  constructor(
    private bonusService: BonusService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bonusService.getBonusById(this.id).subscribe(
      data => {
        this.bonus = data;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.bonusService.updateBonus(this.id, this.bonus).subscribe(
      data => {
        this.goToBonusList();
      },
      error => console.log(error)
    );
  }

  goToBonusList() {
    this.router.navigate(['/bonus']);
  }
}
