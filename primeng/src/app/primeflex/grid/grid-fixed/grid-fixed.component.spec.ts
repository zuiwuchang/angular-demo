import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFixedComponent } from './grid-fixed.component';

describe('GridFixedComponent', () => {
  let component: GridFixedComponent;
  let fixture: ComponentFixture<GridFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
