import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequestEquipment from './request-equipment.reducer';
import { adapter } from './request-equipment.reducer';

export const selectRequestEquipmentState = createFeatureSelector<
  fromRequestEquipment.State
>('requestEquipment');

export const selectRequestEquipmentEntities = createSelector(
  selectRequestEquipmentState,
  adapter.getSelectors().selectEntities
);

export const selectAllRequestEquipment = createSelector(
  selectRequestEquipmentState,
  adapter.getSelectors().selectAll
);