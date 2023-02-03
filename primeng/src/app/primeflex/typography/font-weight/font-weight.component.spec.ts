import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontWeightComponent } from './font-weight.component';

describe('FontWeightComponent', () => {
  let component: FontWeightComponent;
  let fixture: ComponentFixture<FontWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontWeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
