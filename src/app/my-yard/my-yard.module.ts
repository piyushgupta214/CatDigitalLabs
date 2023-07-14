import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyYardPageComponent } from './my-yard.page.component';
import { MyYardPageContainerComponent } from './my-yard.page.container';

import { MyYardPageRoutingModule } from './my-yard-routing.module';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        MyYardPageRoutingModule,
        SharedModule
    ],
  declarations: [MyYardPageComponent, MyYardPageContainerComponent]
})
export class MyYardPageModule {}
