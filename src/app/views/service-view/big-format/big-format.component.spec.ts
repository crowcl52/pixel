import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFormatComponent } from './big-format.component';

describe('BigFormatComponent', () => {
  let component: BigFormatComponent;
  let fixture: ComponentFixture<BigFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
