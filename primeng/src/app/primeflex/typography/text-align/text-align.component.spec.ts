import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAlignComponent } from './text-align.component';

describe('TextAlignComponent', () => {
  let component: TextAlignComponent;
  let fixture: ComponentFixture<TextAlignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAlignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
