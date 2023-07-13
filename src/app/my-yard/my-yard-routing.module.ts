import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyYardPageContainerComponent } from './my-yard.page.container';

const routes: Routes = [
  {
    path: '',
    component: MyYardPageContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyYardPageRoutingModule {}
