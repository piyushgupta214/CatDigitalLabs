import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Catelogs } from 'src/app/models/catelogs.model';

@Component({
  selector: 'app-categories-ui',
  templateUrl: 'categories.page.component.html',
  styleUrls: ['categories.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesPageComponent{

  @Input() catelogs: Catelogs[]; 

  @Output() loadSubcategories: EventEmitter<Catelogs> = new EventEmitter();

  selectedCategoryId: number = undefined ;

  constructor() {}

  showOrLoadSubcategories(catelog: Catelogs){
    if(this.selectedCategoryId === catelog.id){
      this.selectedCategoryId = undefined;
    } else {
      this.selectedCategoryId = catelog.id;
    }
    this.loadSubcategories.emit(catelog);
  }

}
