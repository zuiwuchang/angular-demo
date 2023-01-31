import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexGrowComponent } from './flex-grow.component';

describe('FlexGrowComponent', () => {
  let component: FlexGrowComponent;
  let fixture: ComponentFixture<FlexGrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexGrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexGrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
