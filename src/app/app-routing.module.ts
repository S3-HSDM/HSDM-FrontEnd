import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { DecksComponent } from './components/decks/decks.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'decks', component: DecksComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
