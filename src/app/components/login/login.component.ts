import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  url = 'http://localhost:3000/api/login';
  username: string = 'admin';
  password: string = 'pa123';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  login() {
    const loginData = {
      username: this.username,
      password: this.password,
    };

    this.http.post(this.url, loginData).subscribe({
      next: (response: any) => {
        this.errorMessage = "";
        localStorage.setItem('token', response.token);
        console.log("Token: ", response.token);
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.errorMessage = error.error.error;
        console.log(this.errorMessage);
        
      },
    });

  }
}
