import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})

export class CardsService {
  uri: string = environment.API_URL + 'cards';
  private cards: Card[] = [];

  constructor(private http: HttpClient) { 

   }

  public getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.uri);
  }

  public addCard(cardType: String, card: Card): Observable<Card> {
    let addCardUri;
    let cardSet;
      if(card.set.indexOf('&') != null){
        cardSet = card.set.replace('&','%26')
      } else {
        cardSet = card.set;
      }
    if(cardType == "hero"){
      addCardUri = this.uri + "?cardClass=" + card.cardClass + "&name=" + card.name + "&image=" + card.image + "&cost=" + card.cost + "&rarity=" + card.rarity + "&set=" + cardSet + "&effect=" + card.effect + "&heroPower=" + card.heroPower + "&heroPowerEffect=" + card.heroPowerEffect + "&heroPowerCost=" + card.heroPowerCost
    }else if(cardType == "minion"){
      addCardUri = this.uri + "?cardClass=" + card.cardClass + "&name=" + card.name + "&image=" + card.image + "&cost=" + card.cost + "&rarity=" + card.rarity + "&set=" + cardSet + "&effect=" + card.effect + "&attack=" + card.attack + "&health=" + card.health + "&tribe=" + card.tribe
    }else if(cardType == "spell"){
      console.log(card.spellType)
      addCardUri = this.uri + "?cardClass=" + card.cardClass + "&name=" + card.name + "&image=" + card.image + "&cost=" + card.cost + "&rarity=" + card.rarity + "&set=" + cardSet + "&effect=" + card.effect + "&spellType=" + card.spellType
    }else if(cardType == "weapon"){
      addCardUri = this.uri + "?cardClass=" + card.cardClass + "&name=" + card.name + "&image=" + card.image + "&cost=" + card.cost + "&rarity=" + card.rarity + "&set=" + cardSet + "&effect=" + card.effect + "&attack=" + card.attack + "&durability=" + card.durability
    }
    this.http.post<Card>(addCardUri, card).subscribe(card => this.cards.push(card));
    return null
  }

  public updateCard(card: Card): Observable<Card> {
    let editCardUri;
    let cardSet;
      if(card.set.indexOf('&') != null){
        cardSet = card.set.replace('&','%26')
      } else {
        cardSet = card.set;
      }
    if(card.heroPower != null){
      editCardUri = this.uri + '/' + card.id + "?cardClass=" + card.cardClass + "&name=" + card.name + "&image=" + card.image + "&cost=" + card.cost + "&rarity=" + card.rarity + "&set=" + cardSet + "&effect=" + card.effect + "&heroPower=" + card.heroPower + "&heroPowerEffect=" + card.heroPowerEffect + "&heroPowerCost=" + card.heroPowerCost
    }else if(card.health != null){
      editCardUri = this.uri + '/' + card.id + "?cardClass=" + card.cardClass + "&name=" + card.name + "&image=" + card.image + "&cost=" + card.cost + "&rarity=" + card.rarity + "&set=" + cardSet + "&effect=" + card.effect + "&attack=" + card.attack + "&health=" + card.health + "&tribe=" + card.tribe
    }else if(card.spellType != null){
      editCardUri = this.uri + '/' + card.id + "?cardClass=" + card.cardClass + "&name=" + card.name + "&image=" + card.image + "&cost=" + card.cost + "&rarity=" + card.rarity + "&set=" + cardSet + "&effect=" + card.effect + "&spellType=" + card.spellType
    }else if(card.durability != null){
      editCardUri = this.uri + '/' + card.id + "?cardClass=" + card.cardClass + "&name=" + card.name + "&image=" + card.image + "&cost=" + card.cost + "&rarity=" + card.rarity + "&set=" + cardSet + "&effect=" + card.effect + "&attack=" + card.attack + "&durability=" + card.durability
    }
    this.http.put<Card>(editCardUri, card).subscribe(card => this.cards.push(card));
    return null
  }

  public deleteCard(id: number): Observable<unknown> {
    this.http.delete(this.uri + '/' + id).subscribe();
    return null
  }
}

