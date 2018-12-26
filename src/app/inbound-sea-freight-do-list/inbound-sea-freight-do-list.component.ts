import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InboundSeaFreightDoListCargoSourceSearchComponent } from '../inbound-sea-freight-do-list-cargo-source-search/inbound-sea-freight-do-list-cargo-source-search.component';
import { InboundSeaFreightDoListCarrierSearchComponent } from '../inbound-sea-freight-do-list-carrier-search/inbound-sea-freight-do-list-carrier-search.component';
import { InboundSeaFreightDoListCneeSearchComponent } from '../inbound-sea-freight-do-list-cnee-search/inbound-sea-freight-do-list-cnee-search.component';
import { InboundSeaFreightDoListFinalDestinationSearchComponent } from '../inbound-sea-freight-do-list-final-destination-search/inbound-sea-freight-do-list-final-destination-search.component';
import { InboundSeaFreightDoListHandlingAgentSearchComponent } from '../inbound-sea-freight-do-list-handling-agent-search/inbound-sea-freight-do-list-handling-agent-search.component';
import { InboundSeaFreightDoListPortOfDischargeSearchComponent } from '../inbound-sea-freight-do-list-port-of-discharge-search/inbound-sea-freight-do-list-port-of-discharge-search.component';
import { InboundSeaFreightDoListPortOfLoadingSearchComponent } from '../inbound-sea-freight-do-list-port-of-loading-search/inbound-sea-freight-do-list-port-of-loading-search.component';
import { InboundSeaFreightDoListPortOfReceiptSearchComponent } from '../inbound-sea-freight-do-list-port-of-receipt-search/inbound-sea-freight-do-list-port-of-receipt-search.component';
import { InboundSeaFreightDoListSalesmanSearchComponent } from '../inbound-sea-freight-do-list-salesman-search/inbound-sea-freight-do-list-salesman-search.component';
import { InboundSeaFreightDoListShipperSearchComponent } from '../inbound-sea-freight-do-list-shipper-search/inbound-sea-freight-do-list-shipper-search.component';
@Component({
  selector: 'app-inbound-sea-freight-do-list',
  templateUrl: './inbound-sea-freight-do-list.component.html',
  styleUrls: ['./inbound-sea-freight-do-list.component.css']
})
export class InboundSeaFreightDOListComponent implements OnInit {

  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  
  ) { }

  ngOnInit() {
  }

  // Search Cargo Source
  openDialogListCargoSourceSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListCargoSourceSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Carrier
  openDialogListCarrierSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListCarrierSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Cnee
  openDialogListCneeSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListCneeSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Port of Discharge
  openDialogPortofDischargeSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListPortOfDischargeSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Final Destination
  openDialogListFinalDestinationSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListFinalDestinationSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Handling Agent
  openDialogListHandingAgentSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListHandlingAgentSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Port of Loading
  openDialogPortofLoadingSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListPortOfLoadingSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Port of Receipt
  openDialogListPortofReceiptSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListPortOfReceiptSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Salesman
  openDialogListSalesmanSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListSalesmanSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  // Search Shipper
  openDialogListShipperSearch(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoListShipperSearchComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
