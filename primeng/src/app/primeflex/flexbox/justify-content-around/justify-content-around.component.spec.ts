import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyContentAroundComponent } from './justify-content-around.component';

describe('JustifyContentAroundComponent', () => {
  let component: JustifyContentAroundComponent;
  let fixture: ComponentFixture<JustifyContentAroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustifyContentAroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustifyContentAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
