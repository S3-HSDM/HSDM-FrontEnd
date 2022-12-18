import { HttpClient } from '@angular/common/http';
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
}

