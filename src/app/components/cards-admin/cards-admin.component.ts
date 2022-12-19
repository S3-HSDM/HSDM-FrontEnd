import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl } from '@angular/forms';

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

  constructor(private cardsService: CardsService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cards$ = this.cardsService.getCards();
  }

  public updateCard(card: Card) {
    this.cardsService.updateCard(card)
    window.location.reload();
  }

  public addCard(card: Card) {
    this.cardsService.addCard(card)
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

  onSubmit(form: NgForm) {
    this.addCard(form.value)
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
}
