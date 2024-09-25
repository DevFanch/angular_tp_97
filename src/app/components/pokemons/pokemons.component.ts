import { Component, inject, OnInit } from '@angular/core';
// import { Pokemon } from '../../interfaces/pokemon';
import { Pokemon } from '../../types/pokemon';
import { DecimalPipe, JsonPipe } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit{
  // pokemons: Array<Pokemon> = [
  //   {id: '001', name: 'Bulbizarre', category: 'graine', type: 'plante, poison', size: 0.7, height: 6.9},
  //   {id: '002', name: 'Herbizarre', category: 'graine', type: 'plante, poison', size: 1, height: 13},
  //   {id: '003', name: 'Florizarre', category: 'graine', type: 'plante, poison', size: 2, height: 100},
  //   {id: '004', name: 'Salamèche', category: 'lézard', type: 'feu', size: 0.6, height: 8.5},
  //   {id: '005', name: 'Reptincel', category: 'flamme', type: 'feu', size: 1.1, height: 19},
  //   {id: '006', name: 'Dracaufeu', category: 'flamme', type: 'feu, vol', size: 1.7, height: 90.5},
  // ]

  pokemons?: Pokemon[]
  private pokemonServ: PokemonService = inject(PokemonService)

  ngOnInit():void {
    this.pokemonServ.fetchSomePokemons().subscribe({
      next: (pokemons: Pokemon[]) => {
        this.pokemons = pokemons
      },
      error: (err: any[]) => {
        console.error(err);
      }
    })
  }
}