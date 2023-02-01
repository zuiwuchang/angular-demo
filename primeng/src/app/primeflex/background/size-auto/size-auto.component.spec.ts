import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeAutoComponent } from './size-auto.component';

describe('SizeAutoComponent', () => {
  let component: SizeAutoComponent;
  let fixture: ComponentFixture<SizeAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
