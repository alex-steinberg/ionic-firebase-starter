import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  name = '';
  email = '';
  password = '';

  constructor(
      private router: Router,
      private toastCtrl: ToastController,
      private authService: AuthService,
  ) { }

  submit(name: string, email: string, password: string): void {
    this.authService.createUser(
        name, email, password
    ).then(
        () => {
          this.router.navigate(['/home']);
        },
        e => {
          this.toastCtrl.create({message: 'Auth error: ' + e, duration: 5000}).then(toast => toast.present());
        }
    );
  }
}
