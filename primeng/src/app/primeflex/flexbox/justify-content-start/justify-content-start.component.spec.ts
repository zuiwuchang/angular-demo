import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyContentStartComponent } from './justify-content-start.component';

describe('JustifyContentStartComponent', () => {
  let component: JustifyContentStartComponent;
  let fixture: ComponentFixture<JustifyContentStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustifyContentStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustifyContentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
