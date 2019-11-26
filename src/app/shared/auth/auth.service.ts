import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UiService } from '../ui/ui.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
}

let _state: AuthState = {
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
  private users: AngularFirestoreCollection<User>;
  users$: Observable<User[]>;

  constructor(
      private afAuth: AngularFireAuth,
      private uiService: UiService,
      private router: Router,
      private afs: AngularFirestore,
  ) {
    this.afAuth.authState.pipe(map(result => {
      if (result !== null) {
        this.updateLoggedInState(true);
      }
    })).subscribe();
    this.users = afs.collection<User>('users');
    this.users$ = this.users.valueChanges();
  }

  addUser(user: User): Promise<any> {
    return this.users.add(user);
  }

  createUser(name: string, email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(async (response) => {
        if (response !== null) {
          const { uid } = response.user;
          const newUser = { name, email, uid };
          await this.addUser(newUser);
          this.updateLoggedInState(true);
        }
      });
  }

  logUserIn(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        if (response !== null) {
          this.updateLoggedInState(true);
        }
      })
      .catch(
      e => this.uiService.showToast({message: e})
    );
  }

  logUserOut(): Promise<any> {
    return this.afAuth.auth.signOut()
      .then(response => {
        this.updateLoggedInState(false);
        this.router.navigate(['/login']);
        this.uiService.showToast({message: 'You have been logged out'});
      });
  }

  private updateLoggedInState(isLoggedIn: boolean) {
    _state = { ..._state, isLoggedIn };
    this.store.next(_state);
  }

  ngOnDestroy(): void {
    this.authSubs.unsubscribe();
  }
}
