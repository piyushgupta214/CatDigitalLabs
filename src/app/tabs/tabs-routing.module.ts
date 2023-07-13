import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPageContainerComponent } from './tabs.page.container';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPageContainerComponent,
    children: [
      {
        path: 'request-equipment',
        loadChildren: () => import('../request-equipment/request-equipment.module').then(m => m.RequestEquipmentPageModule)
      },
      {
        path: 'active-rentals',
        loadChildren: () => import('../active-rentals/active-rentals.module').then(m => m.ActiveRentalsPageModule)
      },
      {
        path: 'open-requests',
        loadChildren: () => import('../open-requests/open-requests.module').then(m => m.OpenRequestsPageModule)
      },
      {
        path: 'my-yard',
        loadChildren: () => import('../my-yard/my-yard.module').then(m => m.MyYardPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/request-equipment',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/request-equipment',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
