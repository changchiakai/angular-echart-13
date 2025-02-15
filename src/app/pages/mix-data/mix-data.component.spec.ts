import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixDataComponent } from './mix-data.component';

describe('MixDataComponent', () => {
  let component: MixDataComponent;
  let fixture: ComponentFixture<MixDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
