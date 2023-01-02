import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cards-admin',
  templateUrl: './cards-admin.component.html',
  styleUrls: ['./cards-admin.component.scss']
})
export class CardsAdminComponent implements OnInit {

  cards$: Observable<Card[]> = new Observable;
  closeResult: string;
  cardType: string;
  cardToAdd: Card;
  editForm: FormGroup;

  constructor(private cardsService: CardsService, private router: Router, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
    this.editForm = this.formBuilder.group({
      id: [''],
      name: [''],
      cardClass: [''],
      cost: [''],
      rarity: [''],
      set: [''],
      effect: [''],
      image: [''],
      attack: [''],
      health: [''],
      tribe: [''],
      spellType: [''],
      durability: [''],
      heroPower: [''],
      heroPowerEffect: [''],
      heroPowerCost: ['']
    });
  }

  public updateCard(card: Card) {
    this.cardsService.updateCard(card)
    window.location.reload();
  }

  public addCard(cardType: string, card: Card) {
    this.cardsService.addCard(cardType, card)
    window.location.reload();
  }

  public deleteCard(id: number) {
    this.cardsService.deleteCard(id)
    window.location.reload();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSubmitAdd(cardType: string, form: NgForm) {
    this.addCard(cardType, form.value)
    this.modalService.dismissAll(); //dismiss the modal
  }

  onSubmitEdit(card: Card){
    this.updateCard(card)
    this.modalService.dismissAll(); //dismiss the modal
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openEdit(contentEdit, card: Card) {
    this.modalService.open(contentEdit, {
      
    });
    this.editForm.patchValue( {
      id: card.id, 
      name: card.name,
      cardClass: card.cardClass,
      cost: card.cost,
      rarity: card.rarity,
      set: card.set,
      effect: card.effect,
      image: card.image,
      attack: card.attack,
      health: card.health,
      tribe: card.tribe,
      spellType: card.spellType,
      durability: card.durability,
      heroPower: card.heroPower,
      heroPowerEffect: card.heroPowerEffect,
      heroPowerCost: card.heroPowerCost
    });
      if(card.heroPower != null){
        document.getElementById('editattackform').remove();
        document.getElementById('edithealthform').remove();
        document.getElementById('edittribeform').remove();
        document.getElementById('editdurabilityform').remove();
        document.getElementById('editspelltypeform').remove();
      }
      if(card.health != null){
        document.getElementById('editdurabilityform').remove();
        document.getElementById('editspelltypeform').remove();
        document.getElementById('edithpform').remove();
        document.getElementById('edithpeffectform').remove();
        document.getElementById('edithpcostform').remove();
      }
      if(card.spellType != null){
        document.getElementById('editattackform').remove();
        document.getElementById('edithealthform').remove();
        document.getElementById('edittribeform').remove();
        document.getElementById('editdurabilityform').remove();
        document.getElementById('edithpform').remove();
        document.getElementById('edithpeffectform').remove();
        document.getElementById('edithpcostform').remove();
      }
      if(card.durability != null){
        document.getElementById('edithealthform').remove();
        document.getElementById('edittribeform').remove();
        document.getElementById('editspelltypeform').remove();
        document.getElementById('edithpform').remove();
        document.getElementById('edithpeffectform').remove();
        document.getElementById('edithpcostform').remove();
      }
  }
}
