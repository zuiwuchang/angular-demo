import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatYComponent } from './repeat-y.component';

describe('RepeatYComponent', () => {
  let component: RepeatYComponent;
  let fixture: ComponentFixture<RepeatYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
