import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCallComponent } from './service-call.component';

describe('ServiceCallComponent', () => {
  let component: ServiceCallComponent;
  let fixture: ComponentFixture<ServiceCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
