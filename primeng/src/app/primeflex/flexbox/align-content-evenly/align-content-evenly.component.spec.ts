import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignContentEvenlyComponent } from './align-content-evenly.component';

describe('AlignContentEvenlyComponent', () => {
  let component: AlignContentEvenlyComponent;
  let fixture: ComponentFixture<AlignContentEvenlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignContentEvenlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignContentEvenlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
