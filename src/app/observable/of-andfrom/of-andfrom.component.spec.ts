import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfAndfromComponent } from './of-andfrom.component';

describe('OfAndfromComponent', () => {
  let component: OfAndfromComponent;
  let fixture: ComponentFixture<OfAndfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfAndfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfAndfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
