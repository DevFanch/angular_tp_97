import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Création d'un Observable à suivre
  private currentUserSubject: BehaviorSubject<any>;
  // Création de l'écouteur du BehaviorSubject
  public currentUser: Observable<any>;

  constructor() {
    // Récupération du contenu du SessionStorage
    const storedUser = sessionStorage.getItem('currentUser');
    const initialUser = storedUser ? JSON.parse(storedUser) : null;
    // Initialisation du BehaviorSubject avec le user connecté
    this.currentUserSubject = new BehaviorSubject<any>(initialUser);
    // Création de l'Observable sur le BehaviorSubject
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Getter pour le BehaviorSubject, utile pour la navigation
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // Méthode pour l'authentification
  login(username: string, password: string) {
    // TODO : Faire la validation
    // Simulation une connexion réussie
    const user = { username, token: 'fake-jwt-token' };
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    // Mise à jour du BehaviorSubject avec le user connecté
    this.currentUserSubject.next(user);
    return user;
  }

  // Méthode pour la deconnexion
  logout() {
    // Suppression du contenu du SessionStorage
    sessionStorage.removeItem('currentUser');
    // Mise à jour du BehaviorSubject a null (user déconnecté)
    this.currentUserSubject.next(null);
  }

  register(user: any) {
    // Simuler un enregistrement réussi
    localStorage.setItem('registeredUser', JSON.stringify(user));
    return true;
  }
}
