import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyContentEndComponent } from './justify-content-end.component';

describe('JustifyContentEndComponent', () => {
  let component: JustifyContentEndComponent;
  let fixture: ComponentFixture<JustifyContentEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustifyContentEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustifyContentEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
