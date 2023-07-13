import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyYardPageComponent } from './my-yard.page.component';
import { MyYardPageContainerComponent } from './my-yard.page.container';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MyYardPageRoutingModule } from './my-yard-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MyYardPageRoutingModule
  ],
  declarations: [MyYardPageComponent, MyYardPageContainerComponent]
})
export class MyYardPageModule {}
