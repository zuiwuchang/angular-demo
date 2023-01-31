import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyContentCenterComponent } from './justify-content-center.component';

describe('JustifyContentCenterComponent', () => {
  let component: JustifyContentCenterComponent;
  let fixture: ComponentFixture<JustifyContentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustifyContentCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustifyContentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
