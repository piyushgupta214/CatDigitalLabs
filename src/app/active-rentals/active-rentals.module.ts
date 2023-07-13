import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActiveRentalsPageComponent } from './active-rentals.page.component';
import { ActiveRentalsPageContainerComponent } from './active-rentals.page.container';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ActiveRentalsPageRoutingModule } from './active-rentals-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ActiveRentalsPageRoutingModule
  ],
  declarations: [ActiveRentalsPageComponent, ActiveRentalsPageContainerComponent]
})
export class ActiveRentalsPageModule {}
