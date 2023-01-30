import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionAbsoluteComponent } from './position-absolute.component';

describe('PositionAbsoluteComponent', () => {
  let component: PositionAbsoluteComponent;
  let fixture: ComponentFixture<PositionAbsoluteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionAbsoluteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionAbsoluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
