import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdvancedComponent } from './form-advanced.component';

describe('FormAdvancedComponent', () => {
  let component: FormAdvancedComponent;
  let fixture: ComponentFixture<FormAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdvancedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
