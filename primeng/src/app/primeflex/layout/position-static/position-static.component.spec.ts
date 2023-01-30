import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionStaticComponent } from './position-static.component';

describe('PositionStaticComponent', () => {
  let component: PositionStaticComponent;
  let fixture: ComponentFixture<PositionStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
