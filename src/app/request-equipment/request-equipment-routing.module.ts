import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestEquipmentPageContainerComponent } from './request-equipment.page.container';
import { CategoriesPageContainerComponent } from './categories/categories.page.container';

const routes: Routes = [
  {
    path: '',
    component: RequestEquipmentPageContainerComponent,
  },
  {
    path: 'categories',
    component: CategoriesPageContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestEquipmentPageRoutingModule {}
