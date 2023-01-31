import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignSelfCenterComponent } from './align-self-center.component';

describe('AlignSelfCenterComponent', () => {
  let component: AlignSelfCenterComponent;
  let fixture: ComponentFixture<AlignSelfCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignSelfCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignSelfCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
