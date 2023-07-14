import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MyYardPageComponent } from './my-yard.page.component';

describe('MyYardPage', () => {
  let component: MyYardPageComponent;
  let fixture: ComponentFixture<MyYardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyYardPageComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyYardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
