import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  appointmentModal = false;
  visitSummary = [];
  bonding = false;
  imageUrl = '../../assets/images/default.png';
  fileToUpload = null;

  constructor() { }

  ngOnInit() {
  }

  public readyToBond() {
    console.log('ready', this.bonding);
    this.bonding = !this.bonding;
  }

  public addAppointment() {
    this.appointmentModal = true;
    this.visitSummary.push(1);
  }

  public handleFileInput(file: FileList) {
    console.log(file);
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

}
