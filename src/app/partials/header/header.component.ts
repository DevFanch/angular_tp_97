import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = "Ma super App"
  links: Array<string> = ['Home', 'TodoList App', 'Generations', 'Pokemons', 'Admin']
  isAdmin: boolean = true
}
