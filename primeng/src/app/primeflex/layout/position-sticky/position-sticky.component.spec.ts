import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionStickyComponent } from './position-sticky.component';

describe('PositionStickyComponent', () => {
  let component: PositionStickyComponent;
  let fixture: ComponentFixture<PositionStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionStickyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
