import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InboundSeaFreightDOGeneralEditComponent } from '../inbound-sea-freight-do-general-edit/inbound-sea-freight-do-general-edit.component';


export interface DialogData {
  do_no: string;
  do_type: string;
  doc_name: string;
  hbl_no: string;
  transit_hbl: string;
  filejob_no: string;
  shipment_code: string;
  service_code: string;
  shipment_type: string;
  original_hbl_required: string;
  mbl_no: string;
  posting_date: Date;
  po_no: string;
  transaction_code: string;
  agent_ref: string;
  contract_no: string;
  an1st_sendingdate: Date;
  an2nd_sendingdate: Date;
  an3rd_sendingdate: Date;
  cus_declaration_no: string;
}
@Component({
  selector: 'app-inbound-sea-freight-do-general',
  templateUrl: './inbound-sea-freight-do-general.component.html',
  styleUrls: ['./inbound-sea-freight-do-general.component.css']
})
// export class DialogOverviewExample {

// do_no: string;
// do_type: string;
// doc_name: string;
// hbl_no: string;
// transit_hbl: string;
// filejob_no: string;
// shipment_code: string;
// service_code: string;
// shipment_type: string;
// original_hbl_required: string;
// mbl_no: string;
// posting_date: Date;
// po_no: string;
// transaction_code: string;
// agent_ref: string;
// contract_no: string;
// an1st_sendingdate: Date;
// an2nd_sendingdate: Date;
// an3rd_sendingdate: Date;
// cus_declaration_no: string;

//   constructor(public dialog: MatDialog) {}

// openDialog(): void {
//   const dialogRef = this.dialog.open(DialogGeneralDialog, {
//     width: '80%',
//     data: {do_no: this.do_no, do_type: this.do_type,doc_name: this.doc_name,hbl_no: this.hbl_no,transit_hbl: this.transit_hbl,filejob_no: this.filejob_no,shipment_code: this.shipment_code, service_code: this.service_code, shipment_type: this.shipment_type,original_hbl_required: this.original_hbl_required,mbl_no: this.mbl_no, posting_date: this.posting_date,po_no: this.po_no,transaction_code: this.transaction_code,agent_ref: this.agent_ref,contract_no: this.contract_no,an1st_sendingdate: this.an1st_sendingdate,an2nd_sendingdate: this.an2nd_sendingdate,an3rd_sendingdate: this.an3rd_sendingdate, cus_declaration_no: this.cus_declaration_no}
//   });
//   /*  
//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//     this.animal = result;
//   });
//   */
// }

// }

// @Component({
//   selector: 'inbound-sea-freight-do-general-edit',
//   templateUrl: './inbound-sea-freight-do-general-edit.component.html',
// })
// export class DialogGeneralDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogGeneralDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

export class InboundSeaFreightDOGeneralComponent implements OnInit {
  do_no: string;
  do_type: string;
  doc_name: string;
  hbl_no: string;
  transit_hbl: string;
  filejob_no: string;
  shipment_code: string;
  service_code: string;
  shipment_type: string;
  original_hbl_required: string;
  mbl_no: string;
  posting_date: Date;
  po_no: string;
  transaction_code: string;
  agent_ref: string;
  contract_no: string;
  an1st_sendingdate: Date;
  an2nd_sendingdate: Date;
  an3rd_sendingdate: Date;
  cus_declaration_no: string;
  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDOGeneralEditComponent, {
      width: '80%',
      // data: { msg: 'text' }
      data: { do_no: this.do_no, do_type: this.do_type, doc_name: this.doc_name, hbl_no: this.hbl_no, transit_hbl: this.transit_hbl, filejob_no: this.filejob_no, shipment_code: this.shipment_code, service_code: this.service_code, shipment_type: this.shipment_type, original_hbl_required: this.original_hbl_required, mbl_no: this.mbl_no, posting_date: this.posting_date, po_no: this.po_no, transaction_code: this.transaction_code, agent_ref: this.agent_ref, contract_no: this.contract_no, an1st_sendingdate: this.an1st_sendingdate, an2nd_sendingdate: this.an2nd_sendingdate, an3rd_sendingdate: this.an3rd_sendingdate, cus_declaration_no: this.cus_declaration_no }
    });
    /*  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    */

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // if(result){
      //   // cancel/stop current training
      //   // this.trainingStop.emit();
      //   this.trainingService.cancelExercise(this.progressValue);
      // }else{
      //   // continue training
      //   this.startOrResumeTimer();

      // }
    })
  }

}