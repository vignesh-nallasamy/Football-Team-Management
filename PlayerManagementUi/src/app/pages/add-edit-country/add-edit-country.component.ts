import { Component, OnInit } from '@angular/core';
import {Country} from "../../models/country";
import {CountryServiceService} from "../../services/country-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.css']
})
export class AddEditCountryComponent implements OnInit {

  country!:any;
  trophy : string = ""
  trophyString:string = ""
  constructor(
    private countryService : CountryServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
    if(history.state.country)this.country = history.state.country
    else{
    this.country = {name:"",points:0,trophies:[]}
    }
    this.convertArrayToString();
  }

  addToTrophies(){
if (this.trophy){
  this.country.trophies.push(this.trophy);
  this.trophy = "";
  this.convertArrayToString();
}
  }

  convertArrayToString(){
    this.trophyString = ""
    this.country.trophies.map((item:string)=>{
      this.trophyString = this.trophyString + item +"\n";
    })
  }

  createCountry(){
    if (this.country.name && this.country.points){
      this.countryService.createCountry(this.country).subscribe(
        (data)=>{
          this.country  = {name:"",points:0,trophies:[]}
          this.router.navigate(["/countries"])
        },
        ()=>{
          window.prompt("Some Error with creating data")
        }
      );

    }
    else{
      window.prompt("Name and Points shouldn't be empty")
    }
  }

goToRankings(){
    this.router.navigate(['/countries'])
}



}
