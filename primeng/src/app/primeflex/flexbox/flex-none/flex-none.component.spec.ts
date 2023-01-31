import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexNoneComponent } from './flex-none.component';

describe('FlexNoneComponent', () => {
  let component: FlexNoneComponent;
  let fixture: ComponentFixture<FlexNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexNoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
