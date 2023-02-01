import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatRepeatComponent } from './repeat-repeat.component';

describe('RepeatRepeatComponent', () => {
  let component: RepeatRepeatComponent;
  let fixture: ComponentFixture<RepeatRepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatRepeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
