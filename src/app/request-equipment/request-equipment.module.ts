import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestEquipmentPageComponent } from './request-equipment.page.component';
import { RequestEquipmentPageContainerComponent } from './request-equipment.page.container';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RequestEquipmentPageRoutingModule } from './request-equipment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoriesPageContainerComponent } from './categories/categories.page.container';
import { CategoriesPageComponent } from './categories/categories.page.component';
import { RequestEquipmentDetailPageContainerComponent } from './request-equipment-detail/request-equipment-detail.page.container';
import { RequestEquipmentDetailPageComponent } from './request-equipment-detail/request-equipment-detail.page.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ExploreContainerComponentModule,
    RequestEquipmentPageRoutingModule
  ],
  declarations: [
    RequestEquipmentPageContainerComponent,
    RequestEquipmentPageComponent, 
    CategoriesPageContainerComponent,
    CategoriesPageComponent,
    RequestEquipmentDetailPageContainerComponent,
    RequestEquipmentDetailPageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RequestEquipmentPageModule {}
