import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCols12Component } from './grid-cols12.component';

describe('GridCols12Component', () => {
  let component: GridCols12Component;
  let fixture: ComponentFixture<GridCols12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCols12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCols12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
