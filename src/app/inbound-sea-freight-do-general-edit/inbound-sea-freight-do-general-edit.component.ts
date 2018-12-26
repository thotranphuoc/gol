import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InboundSeaFreightDoGeneralSearchFilejobnoComponent } from '../inbound-sea-freight-do-general-search-filejobno/inbound-sea-freight-do-general-search-filejobno.component';
import { iGeneral } from "../interfaces/general.interface";
import { GolService } from "../services/gol.service";
import { GOL }  from '../tmp/temp';

@Component({
  selector: 'inbound-sea-freight-do-general-edit',
  templateUrl: './inbound-sea-freight-do-general-edit.component.html',
  styleUrls: ['./inbound-sea-freight-do-general-edit.component.css']
})
export class InboundSeaFreightDOGeneralEditComponent implements OnInit {
  GENERAL: iGeneral;

  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private golService: GolService,
    private dialog: MatDialog
    ) {
    this.GENERAL = data;
    console.log(this.GENERAL);
  }

  ngOnInit() {
    this.golService.HBLgetAll()
    console.log(GOL);
  }
  
  cancel(){
    
  }

  OpenDialogSearchFileNo(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoGeneralSearchFilejobnoComponent, {
      width: '80%',
      height: '90vh',
      // data: { msg: 'text' }
      // data: { do_no: this.do_no, do_type: this.do_type, doc_name: this.doc_name, hbl_no: this.hbl_no, transit_hbl: this.transit_hbl, filejob_no: this.filejob_no, shipment_code: this.shipment_code, service_code: this.service_code, shipment_type: this.shipment_type, original_hbl_required: this.original_hbl_required, mbl_no: this.mbl_no, posting_date: this.posting_date, po_no: this.po_no, transaction_code: this.transaction_code, agent_ref: this.agent_ref, contract_no: this.contract_no, an1st_sendingdate: this.an1st_sendingdate, an2nd_sendingdate: this.an2nd_sendingdate, an3rd_sendingdate: this.an3rd_sendingdate, cus_declaration_no: this.cus_declaration_no }
      //data: this.GENERAL
    });
    dialogRef.disableClose = true;
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
