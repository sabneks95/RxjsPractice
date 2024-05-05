import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancatMapComponent } from './cancat-map.component';

describe('CancatMapComponent', () => {
  let component: CancatMapComponent;
  let fixture: ComponentFixture<CancatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancatMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
