import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService: AuthService = inject(AuthService)
  private router: Router = inject(Router)

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)
  })

  onSubmit(): void {
    if(this.loginForm.valid) {
      // check if exist
      const {username, pwd} = this.loginForm.value

      // Todo Persist in SL
      this.authService.login(username, pwd)

      // Redirect to Login
      this.router.navigate(['/profile'])
    }
  }

  getErrorMessages(type: string): string {
    if (this.loginForm.get(type)?.hasError('required')) {
      return 'Le champ est obligatoire'
    } else if (this.loginForm.get(type)?.hasError('pattern')) {
      return 'Ce n\'est pas un email'
    }
    return ''
  }
}
