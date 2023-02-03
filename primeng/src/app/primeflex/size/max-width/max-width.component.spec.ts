import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxWidthComponent } from './max-width.component';

describe('MaxWidthComponent', () => {
  let component: MaxWidthComponent;
  let fixture: ComponentFixture<MaxWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxWidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
