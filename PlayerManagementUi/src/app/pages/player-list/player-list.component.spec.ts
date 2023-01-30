import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListComponent } from './player-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {CountryServiceService} from "../../services/country-service.service";
import {PlayerService} from "../../services/player.service";
import {of} from "rxjs";

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;

  let countryServiceMock = {}
  let playerServiceMock = {
    getAllPlayersByCountry(){
      return of()
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerListComponent ],
      imports:[RouterTestingModule],
      providers:[{provide:CountryServiceService,useValue:countryServiceMock},
        {provide: PlayerService,useValue: playerServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {

    window.history.pushState({country:{
        "id": "BNxBAYYBPuezptNcqL0b",
        "name": "Germany",
        "trophies": [
          "world cup 2014"
        ],
        "points": 1000
      }},'','')
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
