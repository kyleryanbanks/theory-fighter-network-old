import {
  Component,
  OnInit
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms'
import { Router } from '@angular/router'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/map'

import { arrayIncludesValidator } from 'app/library/directives'
import { Games, Characters } from 'assets/autocompletes'
import { AuthService } from 'app/shared/services'
import { Notebook } from 'app/shared/models'


@Component({
  templateUrl: './add-notebook-page.component.html',
  styleUrls: ['./add-notebook-page.component.scss']
})
export class AddNotebookPageComponent implements OnInit {
  user: string
  games: string[] = Games
  characters: string[] = Characters
  filteredCharacters: Observable<string[]>
  form: FormGroup
  notebooks$: AngularFirestoreCollection<Notebook>

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private auth: AuthService,
    private router: Router
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

    this.notebooks$ = this.afs.collection('notebooks')
    this.user = this.auth.currentUserId
  }

  filter(val: string): string[] {
    return this.characters.filter(character =>
      character.toLowerCase().indexOf(val.toLowerCase()) === 0)
  }

  addNotebook() {
    const id = this.afs.createId()
    const notebook = {
      id,
      title: this.form.value.title,
      author: this.user,
      character: this.form.value.character,
      game: 'Marvel vs. Capcom: Infinite'
    }

    this.notebooks$.doc(id)
      .set(notebook)
      .then( doc => this.router.navigate(['notebook', id]))
  }
}
