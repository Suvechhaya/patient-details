import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondingAppointmentComponent } from './bonding-appointment.component';

describe('BondingAppointmentComponent', () => {
  let component: BondingAppointmentComponent;
  let fixture: ComponentFixture<BondingAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondingAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondingAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
