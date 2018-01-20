import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { map, switchMap, tap } from 'rxjs/operators'
import { Observable } from 'rxjs/Observable'

import { AuthService } from 'app/shared/services'
import { MatDialog } from '@angular/material/dialog'
import { AddNotebookComponent } from '../components'

import { Library } from '../actions'

@Injectable()
export class LibraryPageEffects {
    @Effect({
        dispatch: false
    })
    addNotebook$: Observable<Action> = this.actions$.ofType<Library.AddNotebook>(Library.ADD_NOTEBOOK)
        .pipe(
            tap(() => this.dialog.open(AddNotebookComponent, {
                data: this.auth.currentUserId
            }))
        )

    constructor (
        private actions$: Actions,
        private dialog: MatDialog,
        private auth: AuthService
    ) {}
}
