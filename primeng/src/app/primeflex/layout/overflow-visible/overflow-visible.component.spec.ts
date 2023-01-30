import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowVisibleComponent } from './overflow-visible.component';

describe('OverflowVisibleComponent', () => {
  let component: OverflowVisibleComponent;
  let fixture: ComponentFixture<OverflowVisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowVisibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverflowVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
