import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RequestEquipmentService } from './request-equipment.service';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RequestEquipmentActionTypes, catelogsLoaded, requestEquipmentError, subcategoriesLoaded } from './request-equipment.actions';

@Injectable()
export class RequestEquipmentEffects {
    constructor(
        private actions$: Actions,
        private requestEquipmentService: RequestEquipmentService
    ) {
    }

    loadCatelogs$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(RequestEquipmentActionTypes.LoadCatelogs),
            mergeMap(() =>
                this.requestEquipmentService.getCatalog().pipe(
                    map(response => catelogsLoaded({ catelogs: response })),
                    catchError(response => of(requestEquipmentError({
                        message: response,
                    })))
                )
            )
        ) }
    );

    loadSubcategories$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(RequestEquipmentActionTypes.LoadSubcategories),
            mergeMap(({ catelog }) =>
                this.requestEquipmentService.getSubcategoriesByCatalog(catelog).pipe(
                    map(response => subcategoriesLoaded({catelog : response })),
                    catchError(response => of(requestEquipmentError({
                        message: response,
                    })))
                )
            )
        ) }
    );

    
    requestEquipmentError$ = createEffect(() => { return this.actions$.pipe(
        ofType(RequestEquipmentActionTypes.RequestEquipmentError),
        tap(({ message}: any) => {
            
        })
    ) }, { dispatch: false });
}
