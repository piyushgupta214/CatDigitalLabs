import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPageContainerComponent {

  constructor(private route: Router) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('@@@@@@@@@@@ checking the tabs navigation', event.urlAfterRedirects);
      }
    });
  }

}
