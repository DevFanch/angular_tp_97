import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Injection de services
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check si l'utilisateur est connecté en récupérant son BehaviorSubject
  const currentUser = authService.currentUserValue;
  // Si j'ai un User, j'ai donc accès à la page
  if (currentUser) {
    return true;
  }

  // Sinon, redirection vers la page de connexion
  router.navigate(['/login']);
  return false;
};
