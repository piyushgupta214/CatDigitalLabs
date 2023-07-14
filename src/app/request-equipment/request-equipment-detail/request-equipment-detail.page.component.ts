import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RequestEquipment } from 'src/app/models/catelogs.model';

@Component({
  selector: 'app-request-equipment-detail-ui',
  templateUrl: 'request-equipment-detail.page.component.html',
  styleUrls: ['request-equipment-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestEquipmentDetailPageComponent {

  @Output() close = new EventEmitter();

  @Input() requestEquipment: RequestEquipment;

  constructor() {}

}
