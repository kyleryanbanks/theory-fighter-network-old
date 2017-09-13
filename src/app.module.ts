import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from './environments/environment';

/* Feature Modules */
import { LoginModule } from './login';
import { LibraryModule } from './library';

/* Providers */
import { AuthService } from './core/services';
import { AuthGuard } from './core/guards';

/* Routing Module */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibraryModule,
    LoginModule,
    AngularFireModule.initializeApp(environment.firebase, 'theoryfighternetwork'),
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
