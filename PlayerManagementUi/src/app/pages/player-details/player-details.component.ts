import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../../models/player";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  player! : Player
  playerId!:string
  flagUrl : string = "https://countryflagsapi.com/svg/"
  constructor(
    private router : Router,
    private playerService : PlayerService
  ) { }

  ngOnInit(): void {
   this.player = history.state.player
    this.flagUrl = this.flagUrl + this.player.country
  }

 goToEditPlayer(){
   this.router.navigate(["/player/add-edit"],{
     state: {country:history.state.country,ranking:history.state.ranking,player:this.player}})
 }

 deletePlayer(){
    this.playerService.deletePlayer(this.player.id).subscribe(
      ()=>{
        prompt("Player profile deleted");
        this.router.navigate(["/countries/"+this.player.country+"/players"],{state:{country:history.state.country,ranking:history.state.ranking}})
      }
    ,()=>{
        prompt("Some Error in deleting the profile");
      }
    )
 }

  goToCountryDetails(){
    let state = history.state
    this.router.navigate(["/countries/"+state.country.name+"/players"],{state:{country:state.country,ranking:state.ranking}})
  }

}
