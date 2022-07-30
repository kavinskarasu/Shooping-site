import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../types/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { signOut } from 'firebase/auth';
import { AppRoutingModule } from '../app-routing.module';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenducatrd: Boolean = false;
  isLoading: Boolean = false;
  passwordMatched: boolean = true;
  constructor(private router: Router) {}
  login(form: LoginForm) {
    if (this.isLoading == true) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        this.isAuthenducatrd = true;
        this.router.navigate(['/']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenducatrd = false;
        alert('Credentials does not match our records');
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
  register(form: RegisterForm) {
    if (this.isLoading == true) {
      return;
    }
    this.isLoading = true;
    if (form.password != form.confirmPassword) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        this.isAuthenducatrd = true;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenducatrd = false;
        // ..
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isAuthenducatrd = false;
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }
}
