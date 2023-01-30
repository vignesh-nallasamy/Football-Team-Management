import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../models/player";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  URL:string ="http://daeirnd62546:7002/"
  constructor(
    private http : HttpClient
  ) { }

  getAllPlayersByCountry(countryName:String):Observable<any>{
    let url = this.URL + "players/"+countryName;
    return this.http.get(url);
  }

  createPlayer(player:Player):Observable<any>{
    let url = this.URL + "players"
    return this.http.post(url,player);
  }

  updatePlayer(player:Player):Observable<any>{
    let url = this.URL + "players";
    return this.http.put(url,player);
  }

  deletePlayer(id:string):Observable<any>{
    let url  = this.URL + "players/"+id;
    return this.http.delete(url);
  }


}
