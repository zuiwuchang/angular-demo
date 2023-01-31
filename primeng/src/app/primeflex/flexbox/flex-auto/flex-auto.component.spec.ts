import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexAutoComponent } from './flex-auto.component';

describe('FlexAutoComponent', () => {
  let component: FlexAutoComponent;
  let fixture: ComponentFixture<FlexAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
