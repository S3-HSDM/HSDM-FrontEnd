import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cards-admin',
  templateUrl: './cards-admin.component.html',
  styleUrls: ['./cards-admin.component.scss']
})
export class CardsAdminComponent implements OnInit {

  cards$: Observable<Card[]> = new Observable;

  constructor(private cardsService: CardsService, private router: Router) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
  }

  public updateCard(card: Card) {
    this.cardsService.updateCard(card)
    window.location.reload();
  }

  public duplicateCard(card: Card) {
    this.cardsService.addCard(card)
    window.location.reload();
  }

  public deleteCard(id: number) {
    this.cardsService.deleteCard(id)
    window.location.reload();
  }
}
