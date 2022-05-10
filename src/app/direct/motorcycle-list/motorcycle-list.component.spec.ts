import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleListComponent } from './motorcycle-list.component';

describe('MotorcycleListComponent', () => {
  let component: MotorcycleListComponent;
  let fixture: ComponentFixture<MotorcycleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorcycleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorcycleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
