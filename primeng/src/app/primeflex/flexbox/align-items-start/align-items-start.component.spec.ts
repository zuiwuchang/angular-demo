import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignItemsStartComponent } from './align-items-start.component';

describe('AlignItemsStartComponent', () => {
  let component: AlignItemsStartComponent;
  let fixture: ComponentFixture<AlignItemsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignItemsStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlignItemsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
