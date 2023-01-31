import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignItemsBaselineComponent } from './align-items-baseline.component';

describe('AlignItemsBaselineComponent', () => {
  let component: AlignItemsBaselineComponent;
  let fixture: ComponentFixture<AlignItemsBaselineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignItemsBaselineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignItemsBaselineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
