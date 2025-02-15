import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeDataComponent } from './compute-data.component';

describe('ComputeDataComponent', () => {
  let component: ComputeDataComponent;
  let fixture: ComponentFixture<ComputeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputeDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
