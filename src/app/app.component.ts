import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'HSDM';
  
  changeAdminStatus(value: string) {
    localStorage.setItem('admin',value);
    window.location.reload();
  }

  getAdminStatus(){
    return localStorage.getItem('admin');
  }

  isCollapsed = true;
  
  constructor(private router: Router, public auth: AuthService, @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit() { }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    localStorage.setItem('admin','false');
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
