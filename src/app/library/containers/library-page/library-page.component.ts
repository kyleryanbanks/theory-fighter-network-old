import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'

import { NotebookModel } from '../../models'
import { State } from '../../reducers/library.reducer'
import * as fromLibrary from '../../reducers'
import { Library } from '../../actions'


@Component({
  selector: 'tfn-library-page',
  template: `
  <tfn-nav-bar title="Library">
    <div class="content" fxLayout="column">
      <tfn-shelf
        (cover)="onCover($event)"
        (favorite)="onFavorite($event)"
        (unfavorite)="onUnfavorite($event)"
        (info)="onInfo($event)"
        (share)="onShare($event)"
        title="All Notebooks"
        [notebooks]="notebooks$ | async"></tfn-shelf>
      <tfn-lib-speed-dial
        (addNotebook)="onAddNotebook($event)"></tfn-lib-speed-dial>
    </div>
  </tfn-nav-bar>
  `,
  styles: [`
    tfn-lib-speed-dial {
      position: fixed;
      bottom: 20px;
      right: 20px;
    }

    div {
        margin: 12px;
    }
  `]
})
export class LibraryPageComponent implements OnInit {

  constructor(private store: Store<State>, private router: Router) {}

  notebooks$ = this.store.select(fromLibrary.selectLibraryNotebooks)

  ngOnInit() {
    this.store.dispatch(new Library.Enter())
  }

  onAddNotebook() {
    this.store.dispatch(new Library.AddNotebook())
  }

  onCover(event) {
    this.router.navigate(['notebook', event])
  }

  onFavorite(event) { }

  onUnfavorite(event) { }

  onInfo(event) { }

  onShare(event) { }
}
