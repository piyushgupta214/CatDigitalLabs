import { ModuleWithProviders, NgModule } from '@angular/core';
import { HeaderContainerComponent } from './header/header.container';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        HeaderContainerComponent,
        HeaderComponent
    ],
    exports: [
        HeaderContainerComponent
    ]
})
export class SharedModule {}
