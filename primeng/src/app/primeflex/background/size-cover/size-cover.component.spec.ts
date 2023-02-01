import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeCoverComponent } from './size-cover.component';

describe('SizeCoverComponent', () => {
  let component: SizeCoverComponent;
  let fixture: ComponentFixture<SizeCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
