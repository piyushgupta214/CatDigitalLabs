import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromRequestEquipment from './request-equipment/request-equipment.reducer';
export interface State {
  requestEquipment: fromRequestEquipment.State;
}

export const reducers: ActionReducerMap<State> = {
  requestEquipment: fromRequestEquipment.reducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
