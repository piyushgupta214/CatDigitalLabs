import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OpenRequestsPageComponent } from './open-requests.page.component';
import { OpenRequestsPageContainerComponent } from './open-requests.page.container';

import { OpenRequestsPageRoutingModule } from './open-requests-routing.module';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        OpenRequestsPageRoutingModule,
        SharedModule
    ],
  declarations: [OpenRequestsPageComponent, OpenRequestsPageContainerComponent]
})
export class OpenRequestsPageModule {}
