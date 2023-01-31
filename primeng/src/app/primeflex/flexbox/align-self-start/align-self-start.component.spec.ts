import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignSelfStartComponent } from './align-self-start.component';

describe('AlignSelfStartComponent', () => {
  let component: AlignSelfStartComponent;
  let fixture: ComponentFixture<AlignSelfStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignSelfStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignSelfStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
