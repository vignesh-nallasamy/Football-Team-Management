import {Component, OnInit} from '@angular/core';
import {CountryServiceService} from "./services/country-service.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PlayerManagementUi';

  constructor(
    private countryService : CountryServiceService
  ) {}


  ngOnInit() {

  }


}
