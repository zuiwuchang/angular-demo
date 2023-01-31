import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionRowReverseComponent } from './direction-row-reverse.component';

describe('DirectionRowReverseComponent', () => {
  let component: DirectionRowReverseComponent;
  let fixture: ComponentFixture<DirectionRowReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionRowReverseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionRowReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
