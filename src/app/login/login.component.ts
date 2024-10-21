import {ChangeDetectionStrategy, Component} from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)])
  });
  submitFormError=false;
  
  ngOnInit(): void {
    console.log('LoginComponent initialized');
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    }

    else if(this.loginForm.invalid){
      this.submitFormError = true
    }
  }
 

  constructor() {}

}
