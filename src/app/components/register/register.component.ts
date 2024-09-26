import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  
  private authService: AuthService = inject(AuthService)
  private router: Router = inject(Router)

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    pwd: new FormControl('', Validators.required),
  })

  onSubmit(): void {
    if(this.registerForm.valid) {
      // Oups check confirm pwd
      // Todo Persist in LS
      this.authService.register(this.registerForm.value)

      // Redirect to Login
      this.router.navigate(['/login'])
    }
  }

  getErrorMessages(type: string): string {
    if (this.registerForm.get(type)?.hasError('required')) {
      console.log('email required');
      return 'Le champ est obligatoire'
    } else if (this.registerForm.get(type)?.hasError('pattern')) {
      return 'Ce n\'est pas un email'
    }
    return ''
  }
}
