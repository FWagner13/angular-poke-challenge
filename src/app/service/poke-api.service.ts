import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const API_LIMIT = 20;

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokeList (apiUrl:string = `https://pokeapi.co/api/v2/pokemon/?limit=${API_LIMIT}&offset=0`){
    return this.http.get(apiUrl);
  }

  getPokeView (pokeRef:string){
    const apiUrl:string = `https://pokeapi.co/api/v2/pokemon/${pokeRef}`;
    return this.http.get(apiUrl);
  }
}
