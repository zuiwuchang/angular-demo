import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionRelativeComponent } from './position-relative.component';

describe('PositionRelativeComponent', () => {
  let component: PositionRelativeComponent;
  let fixture: ComponentFixture<PositionRelativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionRelativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
