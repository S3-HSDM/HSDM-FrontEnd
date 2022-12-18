import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'HSDM';
  
  changeAdminStatus(value: string) {
    localStorage.setItem('admin',value);
    window.location.reload();
  }

  getAdminStatus(){
    return localStorage.getItem('admin');
  }

  isCollapsed = true;
  
  constructor(private router: Router) {
  }
}
