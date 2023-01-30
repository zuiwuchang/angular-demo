import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowAutoComponent } from './overflow-auto.component';

describe('OverflowAutoComponent', () => {
  let component: OverflowAutoComponent;
  let fixture: ComponentFixture<OverflowAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverflowAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
