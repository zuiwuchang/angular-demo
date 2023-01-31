import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexInitialComponent } from './flex-initial.component';

describe('FlexInitialComponent', () => {
  let component: FlexInitialComponent;
  let fixture: ComponentFixture<FlexInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexInitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
