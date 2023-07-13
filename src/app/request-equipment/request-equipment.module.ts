import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestEquipmentPageComponent } from './request-equipment.page.component';
import { RequestEquipmentPageContainerComponent } from './request-equipment.page.container';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RequestEquipmentPageRoutingModule } from './request-equipment-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ExploreContainerComponentModule,
    RequestEquipmentPageRoutingModule
  ],
  declarations: [RequestEquipmentPageComponent, RequestEquipmentPageContainerComponent]
})
export class RequestEquipmentPageModule {}
