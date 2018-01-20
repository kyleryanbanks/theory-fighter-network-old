import {
  Component,
  Inject,
  OnInit
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms'

import { Store } from '@ngrx/store'
import { State } from '../../reducers/library.reducer'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Library } from '../../actions'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/map'

import { arrayIncludesValidator } from 'app/library/directives'
import { Games, Characters } from 'assets/autocompletes'
import { NotebookModel } from '../../models'


@Component({
  template: `
    <h2 mat-dialog-title>New Character Notebook</h2>

    <form [formGroup]="form">
      <mat-dialog-content>
          <mat-form-field>
            <mat-placeholder>Game</mat-placeholder>
            <input #game matInput type="text" disabled value="Marvel vs. Capcom: Infinite">
          </mat-form-field>

          <mat-form-field>
            <mat-placeholder>Title</mat-placeholder>
            <input matInput type="text" formControlName="title">
            <mat-error>Character notebooks must have a title.</mat-error>
          </mat-form-field>

          <mat-form-field>
            <mat-placeholder>Character</mat-placeholder>
            <input matInput type="text" formControlName="character" [matAutocomplete]="charactersAuto">
            <mat-error>Must choose a valid character from {{ game.value }}.</mat-error>
          </mat-form-field>
          <mat-autocomplete #charactersAuto="matAutocomplete">
            <mat-option *ngFor="let character of filteredCharacters | async" [value]="character">
              {{ character }}
            </mat-option>
          </mat-autocomplete>
      </mat-dialog-content>

      <mat-dialog-actions fxLayoutAlign="space-around center">
        <button mat-button mat-dialog-close type="button">Cancel</button>
        <button mat-button mat-dialog-close type="submit" [disabled]="form.invalid" (click)="addNotebook()">Ok</button>
      </mat-dialog-actions>
    </form>
  `,
  styles: [`
    mat-form-field {
      width: 100%;
    }
  `]
})
export class AddNotebookComponent implements OnInit {
  games: string[] = Games
  characters: string[] = Characters
  filteredCharacters: Observable<string[]>
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public user: string,
    private store: Store<State>
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      character: ['', [Validators.required, arrayIncludesValidator(this.characters)]]
    })
  }

  ngOnInit() {
    this.filteredCharacters = this.form.controls.character.valueChanges
    .startWith('')
    .map(val => val ? this.filter(val) : this.characters.slice())
  }

  filter(val: string): string[] {
    return this.characters.filter(character =>
      character.toLowerCase().indexOf(val.toLowerCase()) === 0)
  }

  addNotebook() {
    const notebook = {
      title: this.form.value.title,
      author: this.user,
      character: this.form.value.character,
      game: 'Marvel vs. Capcom: Infinite',
    }

    this.store.dispatch(new Library.AddNotebookConfirm({notebook}))
  }
}
