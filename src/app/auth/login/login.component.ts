import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
  };
  constructor() {}

  ngOnInit(): void {}
  email: string = '';
  isLoading: Boolean = false;

  submit() {
    if (this.isLoading == true) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        alert('login successful');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials does not match our records');
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
