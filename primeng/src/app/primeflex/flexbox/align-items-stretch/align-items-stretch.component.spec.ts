import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignItemsStretchComponent } from './align-items-stretch.component';

describe('AlignItemsStretchComponent', () => {
  let component: AlignItemsStretchComponent;
  let fixture: ComponentFixture<AlignItemsStretchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignItemsStretchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignItemsStretchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
