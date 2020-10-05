import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PatientFormComponent,
    PatientRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [PatientFormComponent],
  exports: [PatientFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
