import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RequestEquipmentPageComponent } from './request-equipment.page.component';

describe('RequestEquipmentPage', () => {
  let component: RequestEquipmentPageComponent;
  let fixture: ComponentFixture<RequestEquipmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestEquipmentPageComponent],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestEquipmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
