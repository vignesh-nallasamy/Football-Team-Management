import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { PlayerDetailsComponent } from './pages/player-details/player-details.component';
import { AddEditCountryComponent } from './pages/add-edit-country/add-edit-country.component';
import { AddEditPlayerComponent } from './pages/add-edit-player/add-edit-player.component';
import { PlayerListComponent } from './pages/player-list/player-list.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CountryDetailsComponent,
    PlayerDetailsComponent,
    AddEditCountryComponent,
    AddEditPlayerComponent,
    PlayerListComponent,
    CountryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
