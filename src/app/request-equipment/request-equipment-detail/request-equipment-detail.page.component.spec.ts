import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestEquipmentDetailPageComponent } from './request-equipment-detail.page.component';

describe('RequestEquipmentDetailPageComponent', () => {
  let component: RequestEquipmentDetailPageComponent;
  let fixture: ComponentFixture<RequestEquipmentDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestEquipmentDetailPageComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestEquipmentDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
