import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

const API_POKEMON = environment.url_api_pokemon

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // private url_api = environment.url_api_pokemon

  private httpClient: HttpClient = inject(HttpClient)
  
  fetchSomePokemons(): any {
    return this.httpClient.get(`${API_POKEMON}limit/500`)
  }
}
