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
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { arrayIncludesValidator } from '@tfn/core/directives';
import { Games, Characters } from '@tfn/core/assets/autocompletes';

@Component({
  selector: 'tfn-add-notebook-page',
  templateUrl: './add-notebook-page.component.html',
  styleUrls: ['./add-notebook-page.component.scss']
})
export class AddNotebookPageComponent implements OnInit {

  games: String[] = Games
  characters: String[] = Characters
  filteredCharacters: Observable<String[]>
  form: FormGroup

  constructor(
    private fb: FormBuilder
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
  }

  filter(val: String): String[] {
    return this.characters.filter(character =>
      character.toLowerCase().indexOf(val.toLowerCase()) === 0);
 }
}
