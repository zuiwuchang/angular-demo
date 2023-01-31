import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignContentBetweenComponent } from './align-content-between.component';

describe('AlignContentBetweenComponent', () => {
  let component: AlignContentBetweenComponent;
  let fixture: ComponentFixture<AlignContentBetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignContentBetweenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignContentBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
