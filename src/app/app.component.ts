import { Component } from '@angular/core';
import { HeaderComponent } from './partials/header/header.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, GenerationsComponent, PokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TP1 - Base - Générations et - Pokemons'; 
}
