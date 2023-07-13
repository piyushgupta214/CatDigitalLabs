import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RequestEquipmentPageComponent } from './request-equipment.page.component';
import { RequestEquipmentPageContainerComponent } from './request-equipment.page.container';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RequestEquipmentPageRoutingModule } from './request-equipment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoriesPageContainerComponent } from './categories/categories.page.container';
import { CategoriesPageComponent } from './categories/categories.page.component';

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
    CategoriesPageComponent
  ]
})
export class RequestEquipmentPageModule {}
