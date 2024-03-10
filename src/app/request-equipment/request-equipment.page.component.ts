import { Component } from '@angular/core';

@Component({
  selector: 'app-request-equipment-ui',
  templateUrl: 'request-equipment.page.component.html',
  styleUrls: ['request-equipment.page.scss']
})
export class RequestEquipmentPageComponent {

  text = `string_to_translate`;

  rentalStoreProps = [
    $localize `Newest rental fleet in the industry`,
    $localize `Unlimited length of Rental`,
    $localize `Quick response time on availability` 
  ];

  contractOwnedProps = [
    $localize `Fixed rental length`,
    $localize `24-hr response time`, 
    $localize `Discounted Prices`
  ]

  constructor() {}

}
