import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Country} from "../../models/country";
import {Player} from "../../models/player";
import {CountryServiceService} from "../../services/country-service.service";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players!:Player[]
  country!: Country
  ranking!:number
  flagUrl : string = "https://countryflagsapi.com/svg/"
  constructor(
    private route : Router,
    private countryService : CountryServiceService,
    private playerService : PlayerService
  ) { }

  ngOnInit(): void {
   this.country  = history.state.country;
   this.ranking = history.state.ranking;
   this.flagUrl = this.flagUrl + this.country.name
   this.playerService.getAllPlayersByCountry(this.country.name).subscribe(
     (data)=>{
       this.players = data
     },
     ()=>{}
   )
  }

  deleteTeam(){
    this.countryService.deleteCountry(this.country.id).subscribe(
      ()=>{
        prompt("Team Deleted SuccessFully");
        this.route.navigate(['/countries']);
      },
      ()=>{}
    )
  }


  goToPlayer(player:Player){
    this.route.navigate(["player/"+player.id], {state:{player:player,country:this.country,ranking:this.ranking}})
}

  goToRankings(){
    this.route.navigate(['/countries'])
  }

  goToEditTeam(){
    this.route.navigate(["/countries/add-edit"],{state:{country:this.country}})
  }

  goToAddPlayer(){
    this.route.navigate(["/player/add-edit"],{state:{country:this.country,ranking:this.ranking}})
  }

}
