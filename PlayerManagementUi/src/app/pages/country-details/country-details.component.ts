import { Component, OnInit } from '@angular/core';
import {CountryServiceService} from "../../services/country-service.service";
import {Country} from "../../models/country";
import { Router} from "@angular/router";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  countries! : Country[];

  constructor(private countryService : CountryServiceService,
              private router : Router) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(
      (data)=>{
        this.countries = data;
        console.log("data given",data)
      },
      ()=>{}
    )
  }

  goToHome() {
    this.router.navigate(["/"]);
  }
}
