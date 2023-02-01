import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadiobuttonComponent } from './form-radiobutton.component';

describe('FormRadiobuttonComponent', () => {
  let component: FormRadiobuttonComponent;
  let fixture: ComponentFixture<FormRadiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRadiobuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
