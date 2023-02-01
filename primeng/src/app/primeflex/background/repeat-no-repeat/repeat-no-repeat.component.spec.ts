import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatNoRepeatComponent } from './repeat-no-repeat.component';

describe('RepeatNoRepeatComponent', () => {
  let component: RepeatNoRepeatComponent;
  let fixture: ComponentFixture<RepeatNoRepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatNoRepeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatNoRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
