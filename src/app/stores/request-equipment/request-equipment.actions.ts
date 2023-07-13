import { createAction, props } from '@ngrx/store';
import { Catelogs, Subcategory } from 'src/app/models/catelogs.model';

export enum RequestEquipmentActionTypes {
  LoadCatelogs = '[RequestEquipment/API] Load Catelogs',
  CatelogsLoaded = '[RequestEquipment/API] Catelogs Loaded',
  LoadSubcategories = '[RequestEquipment/API] Load Subcategories',
  SubcategoriesLoaded = '[RequestEquipment/API] Subcategories Loaded',
  LoadEquipmentDetails = '[RequestEquipment/API] Load Equipment Details',
  EquipmentDetailsLoaded = '[RequestEquipment/API] Equipment Details Loaded',
  RequestEquipmentError = '[RequestEquipment/API] Request Equipment Error',
}

export const loadCatelogs = createAction(
  RequestEquipmentActionTypes.LoadCatelogs
);

export const catelogsLoaded = createAction(
  RequestEquipmentActionTypes.CatelogsLoaded,
  props<{ catelogs: Catelogs[]}>()
);

export const loadSubcategories = createAction(
  RequestEquipmentActionTypes.LoadSubcategories,
  props<{ catelog: Catelogs}>()
);

export const subcategoriesLoaded = createAction(
  RequestEquipmentActionTypes.SubcategoriesLoaded,
  props<{ catelog: Catelogs}>()
);

export const loadEquipmentDetails = createAction(
  RequestEquipmentActionTypes.LoadEquipmentDetails,
  props<{ catelog: Catelogs, subcategoryId: number}>()
);

export const equipmentDetailsLoaded = createAction(
  RequestEquipmentActionTypes.EquipmentDetailsLoaded,
  props<{ catelog: Catelogs}>()
);


export const requestEquipmentError = createAction(
  RequestEquipmentActionTypes.RequestEquipmentError,
  props<{ message: any }>()
);