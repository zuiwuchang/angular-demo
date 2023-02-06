import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorComponent } from './cursor.component';

describe('CursorComponent', () => {
  let component: CursorComponent;
  let fixture: ComponentFixture<CursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
