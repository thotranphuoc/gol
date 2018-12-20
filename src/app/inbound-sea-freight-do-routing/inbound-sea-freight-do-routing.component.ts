import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InbountSeaFreightDoRoutingEditComponent } from '../inbount-sea-freight-do-routing-edit/inbount-sea-freight-do-routing-edit.component';
import { iRouting } from '../interfaces/routing.interface';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-inbound-sea-freight-do-routing',
  templateUrl: './inbound-sea-freight-do-routing.component.html',
  styleUrls: ['./inbound-sea-freight-do-routing.component.css']
})
export class InboundSeaFreightDORoutingComponent implements OnInit {

  ROUTING: iRouting;
  constructor(
    private dialog: MatDialog,
    private localService: LocalService
  ) {
    this.ROUTING = this.localService.ROUTING_DEFAULT;
  }

  ngOnInit() {
  }

  openDialogRouting(): void {
    const dialogRef = this.dialog.open(InbountSeaFreightDoRoutingEditComponent, {
      width: '80%',
      height: '90vh',
      // data: { msg: 'text' }
      // data: { do_no: this.do_no, do_type: this.do_type, doc_name: this.doc_name, hbl_no: this.hbl_no, transit_hbl: this.transit_hbl, filejob_no: this.filejob_no, shipment_code: this.shipment_code, service_code: this.service_code, shipment_type: this.shipment_type, original_hbl_required: this.original_hbl_required, mbl_no: this.mbl_no, posting_date: this.posting_date, po_no: this.po_no, transaction_code: this.transaction_code, agent_ref: this.agent_ref, contract_no: this.contract_no, an1st_sendingdate: this.an1st_sendingdate, an2nd_sendingdate: this.an2nd_sendingdate, an3rd_sendingdate: this.an3rd_sendingdate, cus_declaration_no: this.cus_declaration_no }
      data: this.ROUTING
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
