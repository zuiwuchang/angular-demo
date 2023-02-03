import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitespaceComponent } from './whitespace.component';

describe('WhitespaceComponent', () => {
  let component: WhitespaceComponent;
  let fixture: ComponentFixture<WhitespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitespaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
