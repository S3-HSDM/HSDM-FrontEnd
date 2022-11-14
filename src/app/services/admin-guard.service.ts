import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AdminCardGuardService implements CanActivate{
  constructor(private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('admin') == 'false'){
      return true;
    } else {
      this.router.navigate(['admin-cards']);
      return false;
    }
    
  }
}

@Injectable()
export class CardAdminGuardService implements CanActivate{
  constructor(private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('admin') == 'true'){
      return true;
    } else {
      this.router.navigate(['cards']);
      return false;
    }
    
  }
}