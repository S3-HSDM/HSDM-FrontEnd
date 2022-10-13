import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';

interface Attack {
  value: string;
  viewValue: string;
}
interface Health {
  value: string;
  viewValue: string;
}
interface Rarity {
  value: string;
  viewValue: string;
}
interface CardType {
  value: string;
  viewValue: string;
}
interface Tribe {
  value: string;
  viewValue: string;
}
interface SpellSchool {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})


export class CardsComponent implements OnInit {

  cards$: Observable<Card[]> = new Observable;
  attackValue = null;
  healthValue = null;
  rarityValue = null;
  cardTypeValue = null;
  tribeValue = null;
  spellSchoolValue = null;

  attack: Attack[] = [
    {value: '0', viewValue: '0'},
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10+'},
  ];

  health: Health[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10+'},
  ];

  rarity: Rarity[] = [
    {value: 'Free', viewValue: 'Free'},
    {value: 'Common', viewValue: 'Common'},
    {value: 'Rare', viewValue: 'Rare'},
    {value: 'Epic', viewValue: 'Epic'},
    {value: 'Legendary', viewValue: 'Legendary'}
  ];

  cardType: CardType[] = [
    {value: 'heroCard', viewValue: 'Hero'},
    {value: 'minionCard', viewValue: 'Minion'},
    {value: 'spellCard', viewValue: 'Spell'},
    {value: 'weaponCard', viewValue: 'Weapon'}
  ];

  tribe: Tribe[] = [
    {value: 'All', viewValue: 'All'},
    {value: 'Beast', viewValue: 'Beast'},
    {value: 'Demon', viewValue: 'Demon'},
    {value: 'Dragon', viewValue: 'Dragon'},
    {value: 'Elemental', viewValue: 'Elemental'},
    {value: 'Mech', viewValue: 'Mech'},
    {value: 'Murloc', viewValue: 'Murloc'},
    {value: 'Naga', viewValue: 'Naga'},
    {value: 'Pirate', viewValue: 'Pirate'},
    {value: 'Quilboar', viewValue: 'Quilboar'},
    {value: 'Totem', viewValue: 'Totem'}
  ];

  spellSchool: SpellSchool[] = [
    {value: 'Arcane', viewValue: 'Arcane'},
    {value: 'Fel', viewValue: 'Fel'},
    {value: 'Fire', viewValue: 'Fire'},
    {value: 'Frost', viewValue: 'Frost'},
    {value: 'Holy', viewValue: 'Holy'},
    {value: 'Nature', viewValue: 'Nature'},
    {value: 'Shadow', viewValue: 'Shadow'}
  ];

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
  }

}