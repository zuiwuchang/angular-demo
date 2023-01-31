import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignItemsEndComponent } from './align-items-end.component';

describe('AlignItemsEndComponent', () => {
  let component: AlignItemsEndComponent;
  let fixture: ComponentFixture<AlignItemsEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignItemsEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignItemsEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
