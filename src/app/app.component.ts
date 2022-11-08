import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HSDM';
  
  changeAdminStatus(value: string) {
    localStorage.setItem('admin',value);
  }

  getAdminStatus(){
    return localStorage.getItem('admin');
  }

  constructor(private router: Router) {
  }
}
