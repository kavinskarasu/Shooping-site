import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';

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

  submit() {
    alert(this.form);
  }
}
