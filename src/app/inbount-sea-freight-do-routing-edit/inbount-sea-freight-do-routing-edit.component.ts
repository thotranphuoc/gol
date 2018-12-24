import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InboundSeaFreightDoRoutingOriginalCodeSearchComponent } from '../inbound-sea-freight-do-routing-original-code-search/inbound-sea-freight-do-routing-original-code-search.component';
import { InboundSeaFreightDoRoutingDischargeCodeSearchComponent } from '../inbound-sea-freight-do-routing-discharge-code-search/inbound-sea-freight-do-routing-discharge-code-search.component';
import { InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent } from '../inbound-sea-freight-do-routing-port-of-loading-code-search/inbound-sea-freight-do-routing-port-of-loading-code-search.component';
import { InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent } from '../inbound-sea-freight-do-routing-place-of-delivery-code-search/inbound-sea-freight-do-routing-place-of-delivery-code-search.component';

@Component({
  selector: 'app-inbount-sea-freight-do-routing-edit',
  templateUrl: './inbount-sea-freight-do-routing-edit.component.html',
  styleUrls: ['./inbount-sea-freight-do-routing-edit.component.css']
})
export class InbountSeaFreightDoRoutingEditComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private dialog: MatDialog
  
  ) { }

  ngOnInit() {
  }

  // Search Origin Code
  openDialogSearchOriginCode(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoRoutingOriginalCodeSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Discharge code
  openDialogSearchDisChargeCode(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoRoutingDischargeCodeSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Port of Loading Code
  openDialogSearchPortofLoadingCode(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Place of Delivery Code
  openDialogSearchPlaceofDeliveryCode(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  
}
