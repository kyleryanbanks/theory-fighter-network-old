import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from './environments/environment';

/* Feature Modules */
import { LoginModule } from './login';
import { LibraryModule } from './library';
import { NotebookModule } from './notebook';

/* Providers */
import { AuthService } from './core/services';
import { AuthGuard } from './core/guards';

/* Routing Module */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WildcardRoutingModule } from 'core/wildcard-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'theoryfighternetwork'),
    AppRoutingModule,
    LibraryModule,
    LoginModule,
    NotebookModule,
    WildcardRoutingModule
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
