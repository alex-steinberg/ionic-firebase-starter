import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email = '';
  password = '';

  constructor(
      public afAuth: AngularFireAuth,
      private router: Router,
      private toastCtrl: ToastController,
      private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  submit(email: string, password: string): void {
    this.authService.createUser(
        email, password
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
