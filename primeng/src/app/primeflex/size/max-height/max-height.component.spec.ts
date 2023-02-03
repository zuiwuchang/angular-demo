import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxHeightComponent } from './max-height.component';

describe('MaxHeightComponent', () => {
  let component: MaxHeightComponent;
  let fixture: ComponentFixture<MaxHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
