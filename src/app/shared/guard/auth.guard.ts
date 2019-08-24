import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
      private afAuth: AngularFireAuth,
      private router: Router,
  ) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.afAuth.authState.pipe(
        map(response => {
          console.log('auth response: ', response);
          if (response !== null) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }),
        catchError(error => {
          this.router.navigate(['/login']);
          return error;
        }));
  }
}
