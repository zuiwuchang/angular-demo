import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinHeightComponent } from './min-height.component';

describe('MinHeightComponent', () => {
  let component: MinHeightComponent;
  let fixture: ComponentFixture<MinHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinHeightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
