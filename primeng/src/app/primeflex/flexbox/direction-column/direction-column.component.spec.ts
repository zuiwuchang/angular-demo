import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionColumnComponent } from './direction-column.component';

describe('DirectionColumnComponent', () => {
  let component: DirectionColumnComponent;
  let fixture: ComponentFixture<DirectionColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
