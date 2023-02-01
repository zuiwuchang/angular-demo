import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOffsetComponent } from './grid-offset.component';

describe('GridOffsetComponent', () => {
  let component: GridOffsetComponent;
  let fixture: ComponentFixture<GridOffsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridOffsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridOffsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
