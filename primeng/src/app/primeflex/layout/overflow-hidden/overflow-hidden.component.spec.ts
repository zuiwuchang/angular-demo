import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowHiddenComponent } from './overflow-hidden.component';

describe('OverflowHiddenComponent', () => {
  let component: OverflowHiddenComponent;
  let fixture: ComponentFixture<OverflowHiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowHiddenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverflowHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
