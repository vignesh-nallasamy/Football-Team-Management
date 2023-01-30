import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailsComponent } from './player-details.component';
import {of} from "rxjs";
import {Router, RouterModule} from "@angular/router";
import {PlayerService} from "../../services/player.service";

describe('PlayerDetailsComponent', () => {
  let component: PlayerDetailsComponent;
  let fixture: ComponentFixture<PlayerDetailsComponent>;
  let playerServiceMock = {
    getAllCountries(){
      return of()
    }
  }
  let routerMock = {}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDetailsComponent ],
      imports:[RouterModule],
      providers:[{provide:Router,useValue:routerMock},{provide:PlayerService,useValue: playerServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    window.history.pushState({ player: ''}, '', '');
    fixture = TestBed.createComponent(PlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
