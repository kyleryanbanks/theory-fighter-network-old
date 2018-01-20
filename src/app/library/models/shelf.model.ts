import { NotebookModel } from './notebook.model'

export interface ShelfModel {
    title: String,
    notebooks: NotebookModel[]
}
