import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from '../environments/environment'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

/* Feature Modules */
import { LoginModule } from './login'
import { LibraryModule } from './library'
import { NotebookModule } from './notebook'

/* Providers */
import { AuthService } from 'app/shared/services'
import { AuthGuard } from 'app/shared/guards'

/* Routing Module */
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing'
import { WildcardRoutingModule } from './wildcard-routing.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AppRoutingModule,
    LibraryModule,
    LoginModule,
    NotebookModule,
    WildcardRoutingModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
