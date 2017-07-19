import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'npc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  db: AngularFireDatabase;
  user: Observable<firebase.User>;
  profile: FirebaseObjectObservable<any>;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.db = db;
    this.profile = new FirebaseObjectObservable();
  }

  ngOnInit() {
  }

  login() {
    let db = this.db;
    let profile = this.profile;
    let auth = this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    auth.then(function(result: any){
          let user = result.user;
          this.profile = db.object('profiles/' + user.uid);
          this.profile.subscribe(() => {
            profile.set({
              email: user.email
            })
          })

        }, function(error: any) {
          // The provider's account email, can be used in case of
          // auth/account-exists-with-different-credential to fetch the providers
          // linked to the email:
          let email = error.email;
          let credential = error.credential;
          // In case of auth/account-exists-with-different-credential error,
          // you can fetch the providers using this:
          if (error.code === 'auth/account-exists-with-different-credential') {
            this.afAuth.auth.fetchProvidersForEmail(email).then(function(providers) {
              // The returned 'providers' is a list of the available providers
              // linked to the email address. Please refer to the guide for a more
              // complete explanation on how to recover from this error.
            });
          }
        }
      );
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
