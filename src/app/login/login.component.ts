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
    name: '',
    password: ''
  };
  showModal = false;

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  ngOnInit() {
  }

  public loginUser() {
    this.authService.login(this.userData).subscribe(e => {
        this.router.navigate(['/patient-record']);
      });
  }

  showSignUpModal() {
    this.showModal = true;
  }

}
