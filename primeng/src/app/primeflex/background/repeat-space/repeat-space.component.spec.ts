import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatSpaceComponent } from './repeat-space.component';

describe('RepeatSpaceComponent', () => {
  let component: RepeatSpaceComponent;
  let fixture: ComponentFixture<RepeatSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
