import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineFlexComponent } from './inline-flex.component';

describe('InlineFlexComponent', () => {
  let component: InlineFlexComponent;
  let fixture: ComponentFixture<InlineFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
