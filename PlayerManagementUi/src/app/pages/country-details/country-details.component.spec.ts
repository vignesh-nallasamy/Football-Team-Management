import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import {CountryServiceService} from "../../services/country-service.service";
import {Router, RouterModule} from "@angular/router";
import {of} from "rxjs";

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  let countryServiceMock = {
    getAllCountries(){
      return of()
    }
  }
  let routerMock = {}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule],
      declarations: [ CountryDetailsComponent ],
      providers:[{provide:CountryServiceService,useValue:countryServiceMock},{provide: Router,useValue: routerMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
