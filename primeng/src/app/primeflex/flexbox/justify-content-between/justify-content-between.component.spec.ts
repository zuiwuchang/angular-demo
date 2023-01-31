import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyContentBetweenComponent } from './justify-content-between.component';

describe('JustifyContentBetweenComponent', () => {
  let component: JustifyContentBetweenComponent;
  let fixture: ComponentFixture<JustifyContentBetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustifyContentBetweenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustifyContentBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
