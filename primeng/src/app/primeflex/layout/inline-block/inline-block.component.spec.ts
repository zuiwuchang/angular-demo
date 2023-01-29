import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineBlockComponent } from './inline-block.component';

describe('InlineBlockComponent', () => {
  let component: InlineBlockComponent;
  let fixture: ComponentFixture<InlineBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
