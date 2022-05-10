import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleCardComponent } from './motorcycle-card.component';

describe('MotorcycleCardComponent', () => {
  let component: MotorcycleCardComponent;
  let fixture: ComponentFixture<MotorcycleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
