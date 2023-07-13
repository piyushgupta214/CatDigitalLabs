import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveRentalsPageContainerComponent } from './active-rentals.page.container';

const routes: Routes = [
  {
    path: '',
    component: ActiveRentalsPageContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveRentalsPageRoutingModule {}
