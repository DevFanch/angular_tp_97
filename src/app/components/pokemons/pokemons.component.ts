import { Component, inject, OnInit } from '@angular/core';
import { Pokemon } from '../../types/pokemon';
import { JsonPipe } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit{
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