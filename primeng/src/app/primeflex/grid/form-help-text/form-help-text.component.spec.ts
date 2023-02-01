import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHelpTextComponent } from './form-help-text.component';

describe('FormHelpTextComponent', () => {
  let component: FormHelpTextComponent;
  let fixture: ComponentFixture<FormHelpTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHelpTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHelpTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
