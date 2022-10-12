import { HttpParams, HttpClient } from '@angular/common/http';
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
    let params = new HttpParams();
    let param1 = "";
    let param2 = "";
    params = params.append('class', param1);
    params = params.append('type', param2);
    return this.http.get<Card[]>(this.uri, {params: params});
  }
}

