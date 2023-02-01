import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNestedComponent } from './grid-nested.component';

describe('GridNestedComponent', () => {
  let component: GridNestedComponent;
  let fixture: ComponentFixture<GridNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
