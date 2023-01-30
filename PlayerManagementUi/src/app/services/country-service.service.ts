import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Country} from "../models/country"
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {
  constructor(private http : HttpClient) {
  }
  URL:string = "http://daeirnd62546:7002/";
  headers = new HttpHeaders().set('content-type', 'application/json')

  getAllCountries():Observable<any>{
    let url = this.URL + "countries";
    return this.http.get(url)
  }

  createCountry(country:Country):Observable<any>{
    let url = this.URL + "countries"
    console.log(country)
    return this.http.post(url,country,{headers:this.headers});
  }

  updateCountry(country:Country):Observable<any>{
    let url = this.URL + "countries";
    return this.http.put(url,country);
  }

  deleteCountry(id:String):Observable<any>{
    let url = this.URL + "countries/"+id;
    return this.http.delete(url);
  }


}
