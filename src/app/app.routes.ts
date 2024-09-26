import { Routes } from '@angular/router';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PokemonComponent } from './components/pokemons/pokemon/pokemon.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './guards/auth.guard';

// Todo Guard sur /profile
export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'generations', component: GenerationsComponent, title: 'Pokemons - Générations'},
    {path: 'pokemons', component: PokemonsComponent, title: 'Pokemons - List'},
    {path: 'pokemon/:id', component: PokemonComponent, title: 'Pokemons - Details'},
    {path: 'todo-list', component: TasksComponent, title: 'Todo List'},
    {path: 'register', component: RegisterComponent, title: 'Register'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'profile', component: ProfileComponent, title: 'Profile', canActivate: [authGuard] },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent},
];
