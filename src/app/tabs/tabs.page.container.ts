import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPageContainerComponent {

  constructor() {
  }

}
