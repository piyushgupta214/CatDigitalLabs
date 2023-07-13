import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenRequestsPageContainerComponent } from './open-requests.page.container';

const routes: Routes = [
  {
    path: '',
    component: OpenRequestsPageContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenRequestsPageRoutingModule {}
