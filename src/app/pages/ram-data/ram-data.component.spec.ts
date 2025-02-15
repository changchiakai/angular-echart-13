import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamDataComponent } from './ram-data.component';

describe('RamDataComponent', () => {
  let component: RamDataComponent;
  let fixture: ComponentFixture<RamDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
