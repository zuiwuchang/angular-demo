import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignContentAroundComponent } from './align-content-around.component';

describe('AlignContentAroundComponent', () => {
  let component: AlignContentAroundComponent;
  let fixture: ComponentFixture<AlignContentAroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignContentAroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignContentAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
