import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(
  private fb : FormBuilder,
  private authService : AuthService,
  private router : Router
  ){}

  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password : ['',Validators.required]
  })
  submit() {
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value)
      .subscribe({
        next: (res: any) => {
          console.log("result",res.user.name)
          localStorage.setItem('token', res.token);
          localStorage.setItem('username',res.user.name)
          this.router.navigate(['/home']);
        },
        error: () => alert('Invalid credentials')
      });

  }
}
