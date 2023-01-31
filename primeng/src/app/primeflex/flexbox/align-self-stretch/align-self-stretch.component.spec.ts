import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignSelfStretchComponent } from './align-self-stretch.component';

describe('AlignSelfStretchComponent', () => {
  let component: AlignSelfStretchComponent;
  let fixture: ComponentFixture<AlignSelfStretchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignSelfStretchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignSelfStretchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
