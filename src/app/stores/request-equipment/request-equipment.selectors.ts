import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequestEquipment from './request-equipment.reducer';
import { adapter } from './request-equipment.reducer';
import { Catelogs } from 'src/app/models/catelogs.model';

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

export const selectRequestEquipmentDetail = createSelector(
  selectAllRequestEquipment,
  (allCatelogs: Catelogs[], props?: any) =>{
   let catelog = allCatelogs.find(catelog => catelog.id === props.catelog.id);
   let subcategory = catelog.subcategory?.find(subcat => subcat.id === props.subcategoryId);
   let requestEquipment = subcategory.requestEquipment;
   return requestEquipment
  }
);
