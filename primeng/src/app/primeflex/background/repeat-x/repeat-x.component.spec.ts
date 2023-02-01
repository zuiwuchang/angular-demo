import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatXComponent } from './repeat-x.component';

describe('RepeatXComponent', () => {
  let component: RepeatXComponent;
  let fixture: ComponentFixture<RepeatXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
