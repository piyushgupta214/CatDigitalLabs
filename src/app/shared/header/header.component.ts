import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-header-ui',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input()
  titleText = '';

  @Input()
  canNavigateback = false;

  @Output()
  makeCall: EventEmitter<any> = new EventEmitter();

  @Output()
  backClick: EventEmitter<any> = new EventEmitter();

}
