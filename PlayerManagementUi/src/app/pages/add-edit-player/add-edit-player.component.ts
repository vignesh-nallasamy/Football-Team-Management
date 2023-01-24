import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.css']
})
export class AddEditPlayerComponent implements OnInit {

  player:any
  positions :string[] = ["Attack","Defense","Mid-Fielder","Goal-Keeper"];
  constructor(
    private router : Router,
    private playerService : PlayerService
  ) { }

  ngOnInit(): void {
    if(history.state.player)this.player = {...history.state.player};
    else{
      this.player = {name:"",country:"",position:"",saves:"",goals:"",assists:""}
    }
  }

  goBack(){
    let state = history.state
    if(state.player){
      this.router.navigate(["player/"+this.player.id], {state:{player:state.player,country:state.country,ranking:state.ranking}})
    }
    else{
      this.router.navigate(["/countries/"+state.country.name+"/players"],{state:{country:state.country,ranking:state.ranking}})
    }

  }

  createPlayer(){
    let state = history.state
    this.player.country = state.country.name;
    if(this.player.name && this.player.position){
      this.playerService.createPlayer(this.player).subscribe(
        (data)=>{
          prompt("Player SuccessFully created");
          let state = history.state
          if(state.player){
            this.router.navigate(["player/"+this.player.id], {state:{player:data,country:state.country,ranking:state.ranking}})
          }
          else{
            this.router.navigate(["/countries/"+state.country.name+"/players"],{state:{country:state.country,ranking:state.ranking}})
          }
        },
        (error)=>{
          prompt(error.message)
        }
      )
    }
    else{
      prompt("Name and position shouldn't be empty");
    }
  }

}
