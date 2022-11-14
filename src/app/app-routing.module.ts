import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { DecksComponent } from './components/decks/decks.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminCardGuardService, CardAdminGuardService } from './services/admin-guard.service';
import { CardsAdminComponent } from './components/cards-admin/cards-admin.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent, canActivate: [AdminCardGuardService] },
  { path: 'admin-cards', component: CardsAdminComponent, canActivate: [CardAdminGuardService] },
  { path: 'decks', component: DecksComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
