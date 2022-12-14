import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecksComponent } from './components/decks/decks.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminCardGuardService, CardAdminGuardService } from './services/admin-guard.service';
import { CardsAdminComponent } from './components/cards-admin/cards-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

// Angular Material imports
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    DecksComponent,
    CardsComponent,
    HomeComponent,
    PageNotFoundComponent,
    CardsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatRadioModule,
    NgbModule,
    AuthModule.forRoot({
      domain: 'dev-ahnspy3md2kbd5ya.eu.auth0.com',
      clientId: 'DJo4HHEVl4g5S5bMRJOp1y7i1ezS69ig'
    }),
  ],
  providers: [AdminCardGuardService, CardAdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
