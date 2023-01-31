import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignContentStartComponent } from './align-content-start.component';

describe('AlignContentStartComponent', () => {
  let component: AlignContentStartComponent;
  let fixture: ComponentFixture<AlignContentStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignContentStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignContentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
