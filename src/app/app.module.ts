import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore'
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AppRoutingModule,
    LibraryModule,
    LoginModule,
    NotebookModule,
    WildcardRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
