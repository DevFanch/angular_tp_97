// Pas utiliser : pb de parsing du JSON

// import { Injectable } from '@angular/core';
// import { environment } from '../../environments/environment.development';
// import { User } from '../types/user';
// import { UserCurrent } from '../types/user-current';

// const users_local = environment.users_local
// const user_current = environment.user_current

// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {
//   users: any
//   user: any

//   constructor() {
//     const session = sessionStorage.getItem(user_current) || ''
//     this.user = JSON.parse(session) || null
//     const usersLocal = localStorage.getItem(users_local) || ''
//     this.users = JSON.parse(usersLocal) || []
//   }

//   getAllUsers(): User[] {
//     return this.users
//   }

//   setUser(user: User): void {
//     localStorage.setItem(users_local, JSON.stringify(user))
//   }

//   getCurrentUser(): UserCurrent | null {
//     return this.user
//   }

//   setCurrentUser(user: UserCurrent|null): void {
//     sessionStorage.setItem(user_current, JSON.stringify(user))
//   }
// }
