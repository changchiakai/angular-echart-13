import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsinchuPeopleComponent } from './hsinchu-people.component';

describe('HsinchuPeopleComponent', () => {
  let component: HsinchuPeopleComponent;
  let fixture: ComponentFixture<HsinchuPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsinchuPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsinchuPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
