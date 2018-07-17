import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselServiceComponent } from './carrousel-service.component';

describe('CarrouselServiceComponent', () => {
  let component: CarrouselServiceComponent;
  let fixture: ComponentFixture<CarrouselServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
