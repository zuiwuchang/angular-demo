import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapWrapReverseComponent } from './wrap-wrap-reverse.component';

describe('WrapWrapReverseComponent', () => {
  let component: WrapWrapReverseComponent;
  let fixture: ComponentFixture<WrapWrapReverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapWrapReverseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapWrapReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
