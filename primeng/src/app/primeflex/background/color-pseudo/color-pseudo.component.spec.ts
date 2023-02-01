import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPseudoComponent } from './color-pseudo.component';

describe('ColorPseudoComponent', () => {
  let component: ColorPseudoComponent;
  let fixture: ComponentFixture<ColorPseudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPseudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorPseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
