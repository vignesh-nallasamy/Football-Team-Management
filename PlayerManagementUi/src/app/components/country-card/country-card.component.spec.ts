import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCardComponent } from './country-card.component';
import {of} from "rxjs";
import {Router, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('CountryCardComponent', () => {
  let component: CountryCardComponent;
  let fixture: ComponentFixture<CountryCardComponent>;
  let routerMock = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCardComponent ],
      imports:[RouterModule,RouterTestingModule],
      providers:[{provide:Router,useValue:routerMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
