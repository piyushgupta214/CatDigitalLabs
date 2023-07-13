import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderContainerComponent {
  @Input() titleText = '';

  constructor(
    private navigation: NavigationService
  ) {}

  backClick() {
    this.navigation.back();
  }

  makeCall() {
    //TODO: add functionality here
  }
}
