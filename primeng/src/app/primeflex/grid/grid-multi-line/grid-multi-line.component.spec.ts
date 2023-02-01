import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMultiLineComponent } from './grid-multi-line.component';

describe('GridMultiLineComponent', () => {
  let component: GridMultiLineComponent;
  let fixture: ComponentFixture<GridMultiLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridMultiLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridMultiLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
