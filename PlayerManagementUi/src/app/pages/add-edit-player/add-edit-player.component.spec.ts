import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPlayerComponent } from './add-edit-player.component';
import {Router, RouterModule} from "@angular/router";
import {PlayerService} from "../../services/player.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('AddEditPlayerComponent', () => {
  let component: AddEditPlayerComponent;
  let fixture: ComponentFixture<AddEditPlayerComponent>;
let playerServiceMock = {

}
let routerMock = {}
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPlayerComponent ],
      imports:[RouterTestingModule,RouterModule],
      providers:[{provide:PlayerService,useValue:playerServiceMock}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddEditPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
