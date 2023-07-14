import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../stores/redcuers';
import { loadCatelogs, loadEquipmentDetails, loadSubcategories } from 'src/app/stores/request-equipment/request-equipment.actions';
import { selectAllRequestEquipment } from 'src/app/stores/request-equipment/request-equipment.selectors';
import { Catelogs } from 'src/app/models/catelogs.model';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { RequestEquipmentDetailPageContainerComponent } from '../request-equipment-detail/request-equipment-detail.page.container';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.container.html',
  styleUrls: ['categories.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesPageContainerComponent implements OnInit {

  catelogs$: Observable<Catelogs[]> = this.store.select(selectAllRequestEquipment);
  constructor( private store: Store<fromRoot.State>, private modalController: ModalController) {}

  ngOnInit(): void {
   this.store.dispatch(loadCatelogs());
  }

  loadSubcategories(catelog: Catelogs) {
    this.store.dispatch(loadSubcategories({catelog}));
  }

  async showEquipmentDetail(event: any){
    this.store.dispatch(loadEquipmentDetails(event));
    const modal = await this.modalController.create({
      component: RequestEquipmentDetailPageContainerComponent,
      componentProps: {
        subcategoryId: event.subcategoryId,
        catelog: event.catelog
      }
    });
    return await modal.present();
  }
  

}
