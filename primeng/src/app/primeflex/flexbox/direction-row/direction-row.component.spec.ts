import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionRowComponent } from './direction-row.component';

describe('DirectionRowComponent', () => {
  let component: DirectionRowComponent;
  let fixture: ComponentFixture<DirectionRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
