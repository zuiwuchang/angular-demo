import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTrblComponent } from './position-trbl.component';

describe('PositionTrblComponent', () => {
  let component: PositionTrblComponent;
  let fixture: ComponentFixture<PositionTrblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionTrblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionTrblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
