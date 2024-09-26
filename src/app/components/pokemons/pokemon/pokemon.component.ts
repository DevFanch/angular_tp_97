import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../types/pokemon';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{
  // Injection Services (api, param)
  private routerParam: ActivatedRoute = inject(ActivatedRoute)
  private pokemonService: PokemonService = inject(PokemonService)
  
  pokemon?: Pokemon

  // Get id param from url
  ngOnInit(): void {
    this.pokemonService.getOneById(this.routerParam.snapshot.params['id']).subscribe({
      next: (pokemon: Pokemon) => this.pokemon = pokemon,
      error: (err: any) => console.error(err),
    })
  }
}
