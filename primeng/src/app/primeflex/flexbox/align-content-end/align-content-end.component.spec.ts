import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignContentEndComponent } from './align-content-end.component';

describe('AlignContentEndComponent', () => {
  let component: AlignContentEndComponent;
  let fixture: ComponentFixture<AlignContentEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignContentEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignContentEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
