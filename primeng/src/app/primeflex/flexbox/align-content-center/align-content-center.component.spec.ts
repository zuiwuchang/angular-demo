import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignContentCenterComponent } from './align-content-center.component';

describe('AlignContentCenterComponent', () => {
  let component: AlignContentCenterComponent;
  let fixture: ComponentFixture<AlignContentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignContentCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignContentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
