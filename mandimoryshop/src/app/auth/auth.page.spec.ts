import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthPage } from './auth.page';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


describe('AuthPage', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [AuthPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
