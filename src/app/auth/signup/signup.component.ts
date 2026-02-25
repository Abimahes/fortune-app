import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

constructor(
  private fb : FormBuilder,
  private authService : AuthService,
  private router : Router
  ){}

signUpForm = this.fb.group({
  name: ['', Validators.required],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required, Validators.minLength(6)]]
})

submit(){
  if(this.signUpForm.valid){
    console.log(this.signUpForm.value)
    this.authService.signup(this.signUpForm.value)
    .subscribe({
      next: () => {
        this.router.navigate(['/home']);
        this.signUpForm.reset();
        alert('Signup successful')
      } ,
      error: (err:any) => alert(err.error.message)
    })
    
  }
}
}
