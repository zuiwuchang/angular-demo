import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionFixedComponent } from './position-fixed.component';

describe('PositionFixedComponent', () => {
  let component: PositionFixedComponent;
  let fixture: ComponentFixture<PositionFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
