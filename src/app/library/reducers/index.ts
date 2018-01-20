import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromLibrary from './library.reducer'

export const selectLibraryState = createFeatureSelector<fromLibrary.State>(fromLibrary.featureKey)

export const selectLibraryNotebooks = createSelector(
    selectLibraryState,
    fromLibrary.selectNotebooks
)
