import { Action } from '@ngrx/store'
import { NotebookModel } from '../models'

// export enum ActionTypes {
//     ENTER = '[Library] Enter',
//     ADD_NOTEBOOK = '[Library] Add Notebook',
//     SAVE_NOTEBOOK = '[Library] Save Notebook',
// }
export const ENTER = '[Library] Enter'
export const ADD_NOTEBOOK = '[Library] Add Notebook'
export const ADD_NOTEBOOK_CANCEL = '[Library] Add Notebook Cancel'
export const ADD_NOTEBOOK_CONFIRM = '[Library] Add Notebook Confirm'

export class Enter implements Action {
    readonly type = ENTER
}

export class AddNotebook implements Action {
    readonly type = ADD_NOTEBOOK
}

export class AddNotebookCancel implements Action {
    readonly type = ADD_NOTEBOOK_CANCEL
}

export class AddNotebookConfirm implements Action {
    readonly type = ADD_NOTEBOOK_CONFIRM

    constructor (
        public payload: {
            notebook: NotebookModel
        },
    ) {}
}

export type Actions
    = Enter
    | AddNotebook
    | AddNotebookCancel
    | AddNotebookConfirm
