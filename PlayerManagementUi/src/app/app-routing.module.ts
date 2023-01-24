import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CountryDetailsComponent} from "./pages/country-details/country-details.component";
import {AddEditCountryComponent} from "./pages/add-edit-country/add-edit-country.component";
import {PlayerDetailsComponent} from "./pages/player-details/player-details.component";
import {PlayerListComponent} from "./pages/player-list/player-list.component";
import {AddEditPlayerComponent} from "./pages/add-edit-player/add-edit-player.component";

const routes: Routes = [
  {path:"",redirectTo:"countries",pathMatch:"full"},
  {path:"countries",component:CountryDetailsComponent},
  {path:"countries/add-edit",component:AddEditCountryComponent},
  {path:"countries/:countryName/players",component:PlayerListComponent},
  {path:"player/add-edit",component:AddEditPlayerComponent,pathMatch:"full"},
  {path:"player/:id",component:PlayerDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
