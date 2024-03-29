import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { AngularFireAuth } from 'angularfire2/auth'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore'
import * as firebase from 'firebase'

import { User } from 'app/shared/models'

@Injectable()
export class AuthService {

  user: AngularFirestoreCollection<User>
  authState: any = null

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    })
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : ''
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest' } else if (this.currentUserAnonymous) {
        return 'Anonymous' } else {
          return this.authState['displayName'] || 'User without a Name' }
  }

  //// Social Auth ////

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider()
    return this.socialSignIn(provider)
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider)
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider)
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider()
    return this.socialSignIn(provider)
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.authState = credential.user
          this.updateUserData()
      })
      .catch(error => {
        console.log(error)
        throw error})
  }

  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
    .then((user) => {
      this.authState = user
      this.updateUserData()
    })
    .catch(error => {
      console.log(error)
      throw error})
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.updateUserData()
      })
      .catch(error => {
        console.log(error)
        throw error
      })
  }

  emailSignIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.updateUserData()
      })
      .catch(error => {
        console.log(error)
        throw error
      })
  }

  // Sends email allowing user to reset password
  forgotPassword(email: string) {
    const auth = firebase.auth()

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error))
  }

  //// Sign Out ////

  signOut(): void {
    this.afAuth.auth.signOut()
    this.router.navigate(['/login'])
  }

  //// Helpers ////

  private updateUserData(): void {
  // Writes user name and email to realtime db
  // useful if your app displays information about users or for admin features

    this.user = this.afs.collection('users') // Endpoint on firebase
    const data = {
                  email: this.authState.email,
                  name: this.authState.displayName
                 }

    this.user.add(data)
  }
}
