import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';

/* Feature Modules */
import { LoginModule } from './login';
import { LibraryModule } from './library';

/* Providers */
import { AuthService } from './core/services';

/* Routing Module */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Firebase Config */
const firebaseConfig = {
  apiKey: 'AIzaSyBE4l_CwpQy1w1m-9i9bMd8_UhH5nYK9RE',
  authDomain: 'theoryfighternetwork.firebaseapp.com',
  databaseURL: 'https://theoryfighternetwork.firebaseio.com',
  projectId: 'theoryfighternetwork',
  storageBucket: 'theoryfighternetwork.appspot.com',
  messagingSenderId: '596030064632'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule,
    LoginModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
