import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  cards$: Observable<Card[]> = new Observable;
  breakpoint: number | undefined;
  rarityValue = null;
  cardTypeValue = null;
  tribeValue = null;
  spellSchoolValue = null;
  setValue = null;
  panelOpenState = false;
  closeResult: string;

  rarity: Rarity[] = [
    { value: 'Free', viewValue: 'Free' },
    { value: 'Common', viewValue: 'Common' },
    { value: 'Rare', viewValue: 'Rare' },
    { value: 'Epic', viewValue: 'Epic' },
    { value: 'Legendary', viewValue: 'Legendary' }
  ];

  cardType: CardType[] = [
    { value: 'heroCard', viewValue: 'Hero' },
    { value: 'minionCard', viewValue: 'Minion' },
    { value: 'spellCard', viewValue: 'Spell' },
    { value: 'weaponCard', viewValue: 'Weapon' }
  ];

  tribe: Tribe[] = [
    { value: 'All', viewValue: 'All' },
    { value: 'Beast', viewValue: 'Beast' },
    { value: 'Demon', viewValue: 'Demon' },
    { value: 'Dragon', viewValue: 'Dragon' },
    { value: 'Elemental', viewValue: 'Elemental' },
    { value: 'Mech', viewValue: 'Mech' },
    { value: 'Murloc', viewValue: 'Murloc' },
    { value: 'Naga', viewValue: 'Naga' },
    { value: 'Pirate', viewValue: 'Pirate' },
    { value: 'Quilboar', viewValue: 'Quilboar' },
    { value: 'Totem', viewValue: 'Totem' },
    { value: 'Undead', viewValue: 'Undead'}
  ];

  spellSchool: SpellSchool[] = [
    { value: 'Arcane', viewValue: 'Arcane' },
    { value: 'Fel', viewValue: 'Fel' },
    { value: 'Fire', viewValue: 'Fire' },
    { value: 'Frost', viewValue: 'Frost' },
    { value: 'Holy', viewValue: 'Holy' },
    { value: 'Nature', viewValue: 'Nature' },
    { value: 'Shadow', viewValue: 'Shadow' }
  ];

  setControl = new FormControl('');
  setGroups: SetGroup[] = [
    {
      name: 'Standard sets',
      set: [
        { value: 'Murder at Castle Nathria', viewValue: 'Murder at Castle Nathria' },
        { value: 'Voyage to the Sunken City', viewValue: 'Voyage to the Sunken City' },
        { value: 'Fractured in Alterac Valley', viewValue: 'Fractured in Alterac Valley' },
        { value: 'United in Stormwind', viewValue: 'United in Stormwind' },
        { value: 'Forged in the Barrens', viewValue: 'Forged in the Barrens' },
        { value: 'Core', viewValue: 'Core' }
      ]
    },
    {
      name: 'Wild sets',
      set: [
        { value: 'Madness at the Darkmoon Faire', viewValue: 'Madness at the Darkmoon Faire' },
        { value: 'Scholomance Academy', viewValue: 'Scholomance Academy' },
        { value: 'Demon Hunter Initiate', viewValue: 'Demon Hunter Initiate' },
        { value: 'Ashes of Outland', viewValue: 'Ashes of Outland' },
        { value: "Galakrond's Awakening", viewValue: "Galakrond's Awakening" },
        { value: 'Descent of Dragons', viewValue: 'Descent of Dragons' },
        { value: 'Saviors of Uldum', viewValue: 'Saviors of Uldum' },
        { value: 'Rise of Shadows', viewValue: 'Rise of Shadows' },
        { value: "Rastakhan's Rumble", viewValue: "Rastakhan's Rumble" },
        { value: 'The Boomsday Project', viewValue: 'The Boomsday Project' },
        { value: 'The Witchwood', viewValue: 'The Witchwood' },
        { value: 'Kobolds and Catacombs', viewValue: 'Kobolds and Catacombs' },
        { value: 'Knights of the Frozen Throne', viewValue: 'Knights of the Frozen Throne' },
        { value: "Journey to Un'Goro", viewValue: "Journey to Un'Goro" },
        { value: 'Mean Streets of Gadgetzan', viewValue: 'Mean Streets of Gadgetzan' },
        { value: 'One Night in Karazhan', viewValue: 'One Night in Karazhan' },
        { value: 'Whispers of the Old Gods', viewValue: 'Whispers of the Old Gods' },
        { value: 'League of Explorers', viewValue: 'League of Explorers' },
        { value: 'The Grand Tournament', viewValue: 'The Grand Tournament' },
        { value: 'Blackrock Mountain', viewValue: 'Blackrock Mountain' },
        { value: 'Goblins vs Gnomes', viewValue: 'Goblins vs Gnomes' },
        { value: 'Cure of Naxxramas', viewValue: 'Cure of Naxxramas' },
        { value: 'Legacy', viewValue: 'Legacy' }
      ]
    }
  ]

  constructor(private cardsService: CardsService, private changeDetectorRef: ChangeDetectorRef, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
    if(window.innerWidth <= 440){
      this.breakpoint = 1;
    } else if((window.innerWidth > 440 && window.innerWidth <= 660)){
      this.breakpoint = 2
    } else if((window.innerWidth > 660 && window.innerWidth <= 880)){
      this.breakpoint = 3
    } else if((window.innerWidth > 880 && window.innerWidth <= 1100)){
      this.breakpoint = 4
    } else if((window.innerWidth > 1100 && window.innerWidth <= 1320)){
      this.breakpoint = 5
    } else if(window.innerWidth > 1320){
      this.breakpoint = 6;
    }

    this.changeDetectorRef.detectChanges();
  }

  onResize(event) {
    if(event.target.innerWidth <= 440){
      this.breakpoint = 1;
    } else if((event.target.innerWidth > 440 && event.target.innerWidth <= 660)){
      this.breakpoint = 2
    } else if((event.target.innerWidth > 660 && event.target.innerWidth <= 880)){
      this.breakpoint = 3
    } else if((event.target.innerWidth > 880 && event.target.innerWidth <= 1100)){
      this.breakpoint = 4
    } else if((event.target.innerWidth > 1100 && event.target.innerWidth <= 1320)){
      this.breakpoint = 5
    } else if(event.target.innerWidth > 1320){
      this.breakpoint = 6
    }
  }

  showMessage() {
    window.alert("test")
  }

  openDetails(contentDetails, card: Card) {
    this.modalService.open(contentDetails, {

    })
    document.getElementById('name').setAttribute('value', card.name);
    document.getElementById('class').setAttribute('value', card.cardClass);
    document.getElementById('cost').setAttribute('value', card.cost.toString());
    document.getElementById('rarity').setAttribute('value', card.rarity);
    document.getElementById('set').setAttribute('value', card.set);
    document.getElementById('effect').innerHTML = card.effect;
    if(card.attack != null){
      document.getElementById('attack').setAttribute('value', card.attack.toString());
    }else{
      document.getElementById('attackform').remove();
    }
    if(card.health != null){
      document.getElementById('health').setAttribute('value', card.health.toString());
    }else{
      document.getElementById('healthform').remove();
    }
    if(card.tribe != null){
      document.getElementById('tribe').setAttribute('value', card.tribe);
    }else{
      document.getElementById('tribeform').remove();
    }
    if(card.spellType != null){
      document.getElementById('spelltype').setAttribute('value', card.spellType);
    }else{
      document.getElementById('spelltypeform').remove();
    }
    if(card.durability != null){
      document.getElementById('durability').setAttribute('value', card.durability.toString());
    }else{
      document.getElementById('durabilityform').remove();
    }
    if(card.heroPower != null){
      document.getElementById('hp').setAttribute('value', card.heroPower);
      document.getElementById('hpeffect').innerHTML = card.heroPowerEffect;
      document.getElementById('hpcost').setAttribute('value', card.heroPowerCost.toString());
    }else{
      document.getElementById('hpform').remove();
      document.getElementById('hpeffectform').remove();
      document.getElementById('hpcostform').remove();
    }
  }
  
}
