import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';


@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.scss']
})
export class PatientRecordComponent implements OnInit {

  patientModal = false;

  patientData = [];
  patientUpdateDetail = {
    date: '',
    name: '',
    address: '',
    dob: '',
    telephone: '',
    occupation: '',
    medicalStatus: '',
    description: '',
    accepted: false,
    impression: {
      impression: false,
      impressionDate: '',
      paid: false,
      cashReceived: 0
    },
    xrays: {
      xraysReceived: false,
      linkToImage: '',
      cephAnalysis: false
    },
    intraOral: {
      intraOralPictures: false,
      intraOralPictureDate: ''
    },
    extraOral: {
      extraOralPictures: false,
      extraOralPictureDate: ''
    },
    fillOutManualForm: false,
    casePresentation: {
      casePresentation: false,
      presentedTo: '',
      casePresentationDate: ''
    },
    comment: '',
    readyForBonding: false,
    thesis: false
  };

  isEdit = false;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatientData();
  }

  public getPatientData() {
    this.patientService.getPatient().subscribe(data => {
      this.patientData = data;
    });
  }

  public removePatient(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.patientService.deletePatient(id).subscribe(res => {
        this.getPatientData();
      });
    }
  }

  public updatePatientData(patientDetail) {
    this.patientUpdateDetail = patientDetail;
    this.isEdit = true;
  }

  public addPatient() {
    this.isEdit = false;
  }

}
