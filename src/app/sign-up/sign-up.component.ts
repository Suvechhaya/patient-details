import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public userData = {
    name: '',
    email: '',
    password: ''
  };

  public confirmPassword: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public createUser() {
    if (this.validateUser()) {
      this.authService.register(this.userData).subscribe(e => {
        this.router.navigate(['/']);
      });
    }
  }

  private validateUser() {
    if (this.userData.name && this.userData.email && this.userData.password) {
      if (this.userData.password === this.confirmPassword) {
        return true;
      }
    }
    return false;
  }

}
