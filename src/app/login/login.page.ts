import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password = '';

  constructor(
      private authService: AuthService,
      private router: Router,
  ) { }

  ngOnInit() {
  }

  submit(email: string, password: string): void {
    this.authService.logUserIn(email, password).then(
        () => {
          this.router.navigate(['/home']);
        }
    );
  }

}
