import { NotebookModel } from '../models'
import { Library } from '../actions'

export interface State {
    notebooks: NotebookModel[],
}

const initialState: State = {
    notebooks: [],
}

export const featureKey = 'Library'

export function reducer(state = initialState, action: Library.Actions): State {
    switch (action.type) {
        case Library.ADD_NOTEBOOK_CONFIRM: {
            return {
                ...state,
                notebooks: [...state.notebooks, action.payload.notebook]
            }
        }
        default: {
            return state
        }
    }
}

export function selectNotebooks(state: State) {
    return state.notebooks
}
