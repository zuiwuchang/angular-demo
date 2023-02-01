import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatRoundComponent } from './repeat-round.component';

describe('RepeatRoundComponent', () => {
  let component: RepeatRoundComponent;
  let fixture: ComponentFixture<RepeatRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatRoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
