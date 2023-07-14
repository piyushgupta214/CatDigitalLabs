import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActiveRentalsPageComponent } from './active-rentals.page.component';
import { ActiveRentalsPageContainerComponent } from './active-rentals.page.container';

import { ActiveRentalsPageRoutingModule } from './active-rentals-routing.module';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ActiveRentalsPageRoutingModule,
        SharedModule
    ],
  declarations: [ActiveRentalsPageComponent, ActiveRentalsPageContainerComponent]
})
export class ActiveRentalsPageModule {}
