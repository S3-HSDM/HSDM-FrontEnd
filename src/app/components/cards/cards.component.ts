import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards$: Observable<Card[]> = new Observable;

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
  }

}