import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  title: string = "Ma super App"
  private authService: AuthService = inject(AuthService)
  private router: Router = inject(Router)

  // Pas connecté par défaut
  isLogged: boolean = false

  ngOnInit(): void {
    // Récupération du user connecté grâce à l'observable
    // cf. Création de l'Observable sur le BehaviorSubject
    // this.currentUser = this.currentUserSubject.asObservable();
    // !!user => renvoie true si l'utilisateur est connecté sinon false
    this.authService.currentUser.subscribe(user => this.isLogged = !!user)
  }

  logout() {
    // Déconnexion depuis le service
    this.authService.logout()
    // Redirection vers la page d'accueil
    this.router.navigate(['/home'])
  }
}
