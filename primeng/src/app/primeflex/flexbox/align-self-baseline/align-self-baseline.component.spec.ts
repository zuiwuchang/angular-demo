import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignSelfBaselineComponent } from './align-self-baseline.component';

describe('AlignSelfBaselineComponent', () => {
  let component: AlignSelfBaselineComponent;
  let fixture: ComponentFixture<AlignSelfBaselineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignSelfBaselineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignSelfBaselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
