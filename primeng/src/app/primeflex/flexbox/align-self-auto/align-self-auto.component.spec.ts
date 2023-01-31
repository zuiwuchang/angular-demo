import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignSelfAutoComponent } from './align-self-auto.component';

describe('AlignSelfAutoComponent', () => {
  let component: AlignSelfAutoComponent;
  let fixture: ComponentFixture<AlignSelfAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignSelfAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignSelfAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
