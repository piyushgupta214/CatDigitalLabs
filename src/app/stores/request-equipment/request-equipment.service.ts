import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Catelogs, RequestEquipment, Subcategory } from 'src/app/models/catelogs.model';
import copy from 'fast-copy';

@Injectable({
  providedIn: 'root'
})
export class RequestEquipmentService {
  constructor(private http: HttpClient) {}


  getCatalog() {
    return this.http
      .get<Catelogs[]>(`http://yardclub.github.io/mobile-interview/api/catalog.json`)
      .pipe(
        map((response: any) => {
          return response as Catelogs[];
        })
      );
  }

  getSubcategoriesByCatalog(catelog: Catelogs){
    return this.http
      .get<Catelogs>(`http://yardclub.github.io/mobile-interview/api/catalog/${catelog.id}.json`)
      .pipe(
        map((response: any) => {
          let updatedCatelog = copy(catelog);
          updatedCatelog.subcategory = response;
          return updatedCatelog;
        })
      );
  }

  getEquipmentDetails(catelog: Catelogs, subcategoryId: number){
    return this.http
      .get<Catelogs>(`http://yardclub.github.io/mobile-interview/api/results.json`)
      .pipe(
        map((response: any) => {
          let updatedCatelog = copy(catelog);
          let subcategoryIndex = updatedCatelog.subcategory.findIndex(sub=> sub.id === subcategoryId);
          updatedCatelog.subcategory[subcategoryIndex].requestEquipment = response;
          return updatedCatelog;
        })
      );
  }
}
