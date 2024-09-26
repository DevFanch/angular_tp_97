import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  username: string | undefined
  private authService: AuthService = inject(AuthService)

  ngOnInit(): void {
    // Get User Logged In
    this.authService.currentUser.subscribe(user => this.username = user.username)
  }
}
