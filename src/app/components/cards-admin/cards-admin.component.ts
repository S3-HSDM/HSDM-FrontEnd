import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cards-admin',
  templateUrl: './cards-admin.component.html',
  styleUrls: ['./cards-admin.component.scss']
})
export class CardsAdminComponent implements OnInit {

  cards$: Observable<Card[]> = new Observable;


  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
  }

}
