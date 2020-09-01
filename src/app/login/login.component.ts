import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData = {
    email: '',
    password: ''
  };
  showModal = false;

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  ngOnInit() {
  }

  public loginUser() {
    this.authService.login(this.userData).subscribe(res => {
      localStorage.setItem('bearerToken', res.accessToken);
      this.router.navigate(['/patient-record']);
    });
  }

  showSignUpModal() {
    this.showModal = true;
  }

}
