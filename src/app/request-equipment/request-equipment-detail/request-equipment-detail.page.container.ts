import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { RequestEquipment } from 'src/app/models/catelogs.model';
import { Observable } from 'rxjs';
import { selectRequestEquipmentDetail } from 'src/app/stores/request-equipment/request-equipment.selectors';

@Component({
  selector: 'app-request-equipment-detail',
  templateUrl: 'request-equipment-detail.page.container.html',
  styleUrls: ['request-equipment-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestEquipmentDetailPageContainerComponent {


  requestEquipment$: Observable<RequestEquipment>;

  constructor(
    private store: Store,
    private modalController: ModalController,
    private navParams: NavParams) {
    this.requestEquipment$ = this.store.select(selectRequestEquipmentDetail,
    { catelog: this.navParams.get('catelog'), subcategoryId: this.navParams.get('subcategoryId')});
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
