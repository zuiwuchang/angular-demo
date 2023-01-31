import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapWrapComponent } from './wrap-wrap.component';

describe('WrapWrapComponent', () => {
  let component: WrapWrapComponent;
  let fixture: ComponentFixture<WrapWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapWrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
