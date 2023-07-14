import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Catelogs } from 'src/app/models/catelogs.model';
import { RequestEquipmentActionTypes, catelogsLoaded, equipmentDetailsLoaded, loadCatelogs, subcategoriesLoaded } from './request-equipment.actions';

export const requestEquipmentFeatureKey = 'requestEquipment';

export interface State extends EntityState<Catelogs> {
  
}

export const adapter: EntityAdapter<Catelogs> = createEntityAdapter<
Catelogs
>();

export const initialState: State = adapter.getInitialState({
});

const requestEquipmentReducer = createReducer(
  initialState,
  on(catelogsLoaded, (state, action) => adapter.upsertMany(action.catelogs, state)),
  on(subcategoriesLoaded, (state, action) => adapter.upsertOne(action.catelog, state)),
  on(equipmentDetailsLoaded, (state, action) => adapter.upsertOne(action.catelog, state))
);

export function reducer(state: State | undefined, action: Action) {
  return requestEquipmentReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
