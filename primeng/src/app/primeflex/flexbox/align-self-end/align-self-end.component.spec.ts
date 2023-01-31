import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignSelfEndComponent } from './align-self-end.component';

describe('AlignSelfEndComponent', () => {
  let component: AlignSelfEndComponent;
  let fixture: ComponentFixture<AlignSelfEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignSelfEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignSelfEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
