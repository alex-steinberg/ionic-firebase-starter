import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UiService } from '../ui/ui.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

interface AuthState {
  isLoggedIn: boolean;
}

const _state: AuthState = {
  isLoggedIn: false,
};

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private authSubs = new Subscription();

  private store: BehaviorSubject<AuthState> = new BehaviorSubject(_state);
  private state$: Observable<AuthState> = this.store.asObservable();

  isLoggedIn$: Observable<boolean> = this.state$.pipe(map(state => state.isLoggedIn));

  constructor(
      private afAuth: AngularFireAuth,
      private uiService: UiService,
      private router: Router,
  ) {
    this.afAuth.authState.pipe(map(result => {
      if (result !== null) {
        this.store.next({..._state, isLoggedIn: true});
      }
    })).subscribe();
  }

  createUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        if (response !== null) {
          this.store.next({..._state, isLoggedIn: true});
        }
      });
  }

  logUserIn(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        if (response !== null) {
          this.store.next({..._state, isLoggedIn: true});
        }
      })
      .catch(
      e => this.uiService.showToast({message: e})
    );
  }

  logUserOut(): Promise<any> {
    return this.afAuth.auth.signOut()
      .then(response => {
        this.store.next({..._state, isLoggedIn: false});
        this.router.navigate(['/login']);
        this.uiService.showToast({message: 'You have been logged out'});
      });
  }

  ngOnDestroy(): void {
    this.authSubs.unsubscribe();
  }
}
