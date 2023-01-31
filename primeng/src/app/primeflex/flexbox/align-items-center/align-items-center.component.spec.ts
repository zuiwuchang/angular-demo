import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignItemsCenterComponent } from './align-items-center.component';

describe('AlignItemsCenterComponent', () => {
  let component: AlignItemsCenterComponent;
  let fixture: ComponentFixture<AlignItemsCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignItemsCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignItemsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
