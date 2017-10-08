import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireModule } from 'angularfire2'
import { environment } from '../environments/environment'

/* Feature Modules */
import { LoginModule } from './login'
import { LibraryModule } from './library'
import { NotebookModule } from './notebook'

/* Providers */
import { AuthService } from 'app/shared/services'
import { AuthGuard } from 'app/shared/guards'

/* Routing Module */
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { WildcardRoutingModule } from './wildcard-routing.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'theoryfighternetwork'),
    AngularFirestoreModule.enablePersistence(),
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
