import { Component } from '@angular/core';

@Component({
  selector: 'app-request-equipment-ui',
  templateUrl: 'request-equipment.page.component.html',
  styleUrls: ['request-equipment.page.scss']
})
export class RequestEquipmentPageComponent {

  rentalStoreProps = [
    'Newest rental fleet in the industry',
    'Unlimited length of Rental',
    'Quick response time on availability' 
  ];

  contractOwnedProps = [
    'Fixed rental length',
    '24-hr response time', 
    'Discounted Prices'
  ]

  constructor() {}

}
