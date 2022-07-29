import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  passwordMatched: boolean = true;

  isLoading: Boolean = false;
  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.isLoading == true) {
      return;
    }
    this.isLoading = true;
    if (this.form.password != this.form.confirmPassword) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
