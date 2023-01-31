import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyContentEvenlyComponent } from './justify-content-evenly.component';

describe('JustifyContentEvenlyComponent', () => {
  let component: JustifyContentEvenlyComponent;
  let fixture: ComponentFixture<JustifyContentEvenlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustifyContentEvenlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustifyContentEvenlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
