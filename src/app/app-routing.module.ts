import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { BondingAppointmentComponent } from './bonding-appointment/bonding-appointment.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'patient-record',
    component: PatientRecordComponent
  },
  {
    path: 'patient-form',
    component: PatientFormComponent
  },
  {
    path: 'appointment-form',
    component: BondingAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
