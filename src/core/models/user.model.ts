import { Shelf } from './shelf.model';

export interface User {
    email: String,
    shelves: Shelf[],
    notebooks: String[]
}
