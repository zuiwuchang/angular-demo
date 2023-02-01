import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeContainComponent } from './size-contain.component';

describe('SizeContainComponent', () => {
  let component: SizeContainComponent;
  let fixture: ComponentFixture<SizeContainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeContainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
