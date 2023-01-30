import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCountryComponent } from './add-edit-country.component';
import {CountryServiceService} from "../../services/country-service.service";
import {Router} from "@angular/router";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";

describe('AddEditCountryComponent', () => {
  let component: AddEditCountryComponent;
  let fixture: ComponentFixture<AddEditCountryComponent>;

  let countryServiceMock = {
    getAllCountries(){
      return of()
    }
  }
  let routerMock = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ AddEditCountryComponent ],
      providers:[{provide:CountryServiceService,useValue:countryServiceMock},
        {provide: Router,useValue:routerMock }]
    })
    .compileComponents();
    window.history.pushState({ country: ''}, '', '');
    fixture = TestBed.createComponent(AddEditCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
