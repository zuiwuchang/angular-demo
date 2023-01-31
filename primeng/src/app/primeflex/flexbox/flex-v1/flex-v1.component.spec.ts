import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexV1Component } from './flex-v1.component';

describe('FlexV1Component', () => {
  let component: FlexV1Component;
  let fixture: ComponentFixture<FlexV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
