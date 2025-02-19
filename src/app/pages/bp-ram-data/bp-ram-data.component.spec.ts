import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpRamDataComponent } from './bp-ram-data.component';

describe('BpRamDataComponent', () => {
  let component: BpRamDataComponent;
  let fixture: ComponentFixture<BpRamDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpRamDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpRamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
