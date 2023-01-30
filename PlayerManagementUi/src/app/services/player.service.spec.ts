import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import * as http from "http";
import {HttpClient} from "@angular/common/http";


describe('PlayerService', () => {
  let service: PlayerService;
  let httpMock = {
    get : ()=>{
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[PlayerService,{provide:HttpClient ,useValue:httpMock}]
    });
    service = TestBed.inject(PlayerService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("check base url", function () {
      expect(service.URL).toBe("http://10.22.125.109:7002/")
  });
});
