import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';
import { FormControl } from '@angular/forms';

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

interface Set {
  value: string;
  viewValue: string;
}

interface SetGroup {
  name: string;
  set: Set[];
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})


export class CardsComponent implements OnInit {

  getAdminStatus(){
    return localStorage.getItem('admin');
  }

  cards$: Observable<Card[]> = new Observable;
  rarityValue = null;
  cardTypeValue = null;
  tribeValue = null;
  spellSchoolValue = null;
  setValue = null;

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

  setControl = new FormControl('');
  setGroups: SetGroup[] = [
    {
      name: 'Standard sets',
      set: [
        {value: 'Murder at Castle Nathria', viewValue: 'Murder at Castle Nathria'},
        {value: 'Voyage to the Sunken City', viewValue: 'Voyage to the Sunken City'},
        {value: 'Fractured in Alterac Valley', viewValue: 'Fractured in Alterac Valley'},
        {value: 'United in Stormwind', viewValue: 'United in Stormwind'},
        {value: 'Forged in the Barrens', viewValue: 'Forged in the Barrens'},
        {value: 'Core', viewValue: 'Core'}
      ]
    },
    {
      name: 'Wild sets',
      set: [
        {value: 'Madness at the Darkmoon Faire', viewValue: 'Madness at the Darkmoon Faire'},
        {value: 'Scholomance Academy', viewValue: 'Scholomance Academy'},
        {value: 'Demon Hunter Initiate', viewValue: 'Demon Hunter Initiate'},
        {value: 'Ashes of Outland', viewValue: 'Ashes of Outland'},
        {value: "Galakrond's Awakening", viewValue: "Galakrond's Awakening"},
        {value: 'Descent of Dragons', viewValue: 'Descent of Dragons'},
        {value: 'Saviors of Uldum', viewValue: 'Saviors of Uldum'},
        {value: 'Rise of Shadows', viewValue: 'Rise of Shadows'},
        {value: "Rastakhan's Rumble", viewValue: "Rastakhan's Rumble"},
        {value: 'The Boomsday Project', viewValue: 'The Boomsday Project'},
        {value: 'The Witchwood', viewValue: 'The Witchwood'},
        {value: 'Kobolds and Catacombs', viewValue: 'Kobolds and Catacombs'},
        {value: 'Knights of the Frozen Throne', viewValue: 'Knights of the Frozen Throne'},
        {value: "Journey to Un'Goro", viewValue: "Journey to Un'Goro"},
        {value: 'Mean Streets of Gadgetzan', viewValue: 'Mean Streets of Gadgetzan'},
        {value: 'One Night in Karazhan', viewValue: 'One Night in Karazhan'},
        {value: 'Whispers of the Old Gods', viewValue: 'Whispers of the Old Gods'},
        {value: 'League of Explorers', viewValue: 'League of Explorers'},
        {value: 'The Grand Tournament', viewValue: 'The Grand Tournament'},
        {value: 'Blackrock Mountain', viewValue: 'Blackrock Mountain'},
        {value: 'Goblins vs Gnomes', viewValue: 'Goblins vs Gnomes'},
        {value: 'Cure of Naxxramas', viewValue: 'Cure of Naxxramas'},
        {value: 'Legacy', viewValue: 'Legacy'}
      ]
    }
  ]

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
  }

}