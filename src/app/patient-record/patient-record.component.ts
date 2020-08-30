import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {

  patientModal = false;

  constructor() { }

  ngOnInit() {
  }

  public addPatient() {
    this.patientModal = !this.patientModal;
  }

}
