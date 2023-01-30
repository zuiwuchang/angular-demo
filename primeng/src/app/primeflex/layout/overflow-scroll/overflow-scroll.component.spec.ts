import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowScrollComponent } from './overflow-scroll.component';

describe('OverflowScrollComponent', () => {
  let component: OverflowScrollComponent;
  let fixture: ComponentFixture<OverflowScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverflowScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
