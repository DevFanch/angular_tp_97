import { Routes } from '@angular/router';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PokemonComponent } from './components/pokemons/pokemon/pokemon.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'generations', component: GenerationsComponent, title: 'Pokemons - Générations'},
    {path: 'pokemons', component: PokemonsComponent, title: 'Pokemons - List'},
    {path: 'pokemon/:id', component: PokemonComponent, title: 'Pokemons - Details'},
    {path: 'todo-list', component: TasksComponent, title: 'Todo List'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
];
