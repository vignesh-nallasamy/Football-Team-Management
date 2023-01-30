import { TestBed } from '@angular/core/testing';

import { CountryServiceService } from './country-service.service';
import {HttpClient} from "@angular/common/http";

describe('CountryServiceService', () => {
  let service: CountryServiceService;

  let httpMock = {
    get : ()=>{
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide:HttpClient,useValue:httpMock}]
    });
    service = TestBed.inject(CountryServiceService);
  })


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
