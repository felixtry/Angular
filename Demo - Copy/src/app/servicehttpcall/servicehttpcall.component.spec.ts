import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicehttpcallComponent } from './servicehttpcall.component';

describe('ServicehttpcallComponent', () => {
  let component: ServicehttpcallComponent;
  let fixture: ComponentFixture<ServicehttpcallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicehttpcallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicehttpcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
