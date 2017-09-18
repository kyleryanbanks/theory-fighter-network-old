import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { arrayIncludesValidator } from '@tfn/core/directives';
import { Games, Characters } from '@tfn/core/assets/autocompletes';
import { AuthService } from '@tfn/core/services';

@Component({
  templateUrl: './add-notebook-page.component.html',
  styleUrls: ['./add-notebook-page.component.scss']
})
export class AddNotebookPageComponent implements OnInit {
  user: String
  games: String[] = Games
  characters: String[] = Characters
  filteredCharacters: Observable<String[]>
  form: FormGroup
  notebookRef: FirebaseListObservable<any>

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      character: ['', [Validators.required, arrayIncludesValidator(this.characters)]]
    })
  }

  ngOnInit() {
    this.filteredCharacters = this.form.controls.character.valueChanges
    .startWith('')
    .map(val => val ? this.filter(val) : this.characters.slice());

    this.notebookRef = this.db.list('/mvci/notebooks')
    this.user = this.auth.currentUserId
  }

  filter(val: String): String[] {
    return this.characters.filter(character =>
      character.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  addNotebook() {
    const notebook = {
      info: {
        title: this.form.value.title,
        cover: 'core/assets/images/mvci.png',
        author: this.user,
        character: this.form.value.character,
        game: 'Marvel vs. Capcom: Infinite'
      }
    }

    this.notebookRef.push(notebook)
  }
}
