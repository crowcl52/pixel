import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstampComponent } from './estamp.component';

describe('EstampComponent', () => {
  let component: EstampComponent;
  let fixture: ComponentFixture<EstampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
