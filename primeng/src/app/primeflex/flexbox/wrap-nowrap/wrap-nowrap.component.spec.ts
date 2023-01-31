import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapNowrapComponent } from './wrap-nowrap.component';

describe('WrapNowrapComponent', () => {
  let component: WrapNowrapComponent;
  let fixture: ComponentFixture<WrapNowrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapNowrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapNowrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
