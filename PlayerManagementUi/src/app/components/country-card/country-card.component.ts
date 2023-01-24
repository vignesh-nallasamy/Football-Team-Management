import {Component, Input, OnInit,OnChanges} from '@angular/core';
import {Country} from "../../models/country";
import {Router} from "@angular/router";

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent  {

  flagUrl = "https://countryflagsapi.com/svg/"
  @Input()country!:Country
  @Input()rank!:number

  constructor(
    private router : Router
  ) { }


  ngOnChanges(){
    this.flagUrl = this.flagUrl +  this.country.name;
}

  navigateFromCountry(){
    if (this.country) this.router.navigate(["/countries/"+this.country.name+"/players"],{state:{country:this.country,ranking:this.rank}});
    else{
      this.router.navigate(["/countries/add-edit"])
    }

  }




}
