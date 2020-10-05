import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  @ViewChild('closeModal', { static: false }) closeModal: ElementRef;

  @Input() isEditForm;

  @Input() patientData = {
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

  appointmentModal = false;
  visitSummary = [];
  bonding = false;
  imageUrl = '../../assets/images/default.png';
  fileToUpload = null;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
  }

  public addAppointment() {
    this.appointmentModal = true;
    this.visitSummary.push(1);
    if (this.patientData['bondingAppointment']) {
      this.patientData['bondingAppointment'][Object.keys(this.patientData['bondingAppointment']).length + 1] = {
        bondingAppointmentDate: '',
        summary: '',
        pictures: false,
        nextDate: ''
      };
    } else {
      this.patientData['bondingAppointment'] = {};
      this.patientData['bondingAppointment'][1] = {
        bondingAppointmentDate: '',
        summary: '',
        pictures: false,
        nextDate: ''
      };
    }
  }

  public handleFileInput(file: FileList) {
    // this.fileToUpload = file.item(0);
    // console.log(this.fileToUpload);
    // show image preview
    //   const reader = new FileReader();
    //   reader.onload = (event: any) => {
    //     this.imageUrl = event.target.result;
    //     console.log('imageUrl', this.imageUrl);
    //   };
    //   reader.readAsDataURL(this.fileToUpload);
  }

  public createPatient() {
    if (this.validateUser()) {
      this.patientService.addPatient(this.patientData).subscribe(data => {
        this.patientData = data;
        window.location.reload();
      });
    } else {
      console.log('Fill all the required fields!');
    }
  }

  public updatePatient() {
    this.patientService.editPatient(this.patientData['_id'], this.patientData).subscribe(data => {
      this.patientData = data;
      window.location.reload();
    });
  }

  public validateUser() {
    if (this.patientData.date &&
      this.patientData.name && this.patientData.address && this.patientData.telephone &&
      this.patientData.occupation && this.patientData.medicalStatus &&
      this.patientData.description &&
      this.patientData.accepted) {
      return true;
    }
    return false;
  }

  public isAccepted(data) {
    this.patientData.accepted = data;
  }

  public isImpression(data) {
    this.patientData.impression.impression = data;
  }

  public isPaid(data) {
    this.patientData.impression.paid = data;
  }

  public receivedXrays(data) {
    this.patientData.xrays.xraysReceived = data;
  }

  public anayzedCelp(data) {
    this.patientData.xrays.cephAnalysis = data;
  }

  public isIntraOralPicture(data) {
    this.patientData.intraOral.intraOralPictures = data;
  }

  public isExtraOralPicture(data) {
    this.patientData.extraOral.extraOralPictures = data;
  }

  public fillManualForm(data) {
    this.patientData.fillOutManualForm = data;
  }

  public presentCase(data) {
    this.patientData.casePresentation.casePresentation = data;
  }

  public readyToBond(data) {
    this.patientData.readyForBonding = data;
  }

  public isThesis(data) {
    this.patientData.thesis = data;
  }

  public bondy(id) {
    this.patientData['bondingAppointment'][id].pictures = !this.patientData['bondingAppointment'][id].pictures;
  }

  public closeModalForm() {
    window.location.reload();
  }

}
