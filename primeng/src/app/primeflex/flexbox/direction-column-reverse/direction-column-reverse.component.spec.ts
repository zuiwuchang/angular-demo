import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionColumnReverseComponent } from './direction-column-reverse.component';

describe('DirectionColumnReverseComponent', () => {
  let component: DirectionColumnReverseComponent;
  let fixture: ComponentFixture<DirectionColumnReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionColumnReverseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionColumnReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
