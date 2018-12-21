import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InboundSeaFreightDoPartiesShipperSearchCodeComponent } from '../inbound-sea-freight-do-parties-shipper-search-code/inbound-sea-freight-do-parties-shipper-search-code.component';
import { InboundSeaFreightDoPartiesConsigneeSearchCodeComponent } from '../inbound-sea-freight-do-parties-consignee-search-code/inbound-sea-freight-do-parties-consignee-search-code.component';
import { InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent } from '../inbound-sea-freight-do-parties-actual-consignee-search-code/inbound-sea-freight-do-parties-actual-consignee-search-code.component';
import { InboundSeaFreightDoPartiesBillToSearchCodeComponent } from '../inbound-sea-freight-do-parties-bill-to-search-code/inbound-sea-freight-do-parties-bill-to-search-code.component';
import { iPaties } from '../interfaces/parties.interface';



@Component({
  selector: 'app-inbound-sea-freight-do-parties-edit',
  templateUrl: './inbound-sea-freight-do-parties-edit.component.html',
  styleUrls: ['./inbound-sea-freight-do-parties-edit.component.css']
})
export class InboundSeaFreightDoPartiesEditComponent implements OnInit {
  PARTIES: iPaties;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private dialog: MatDialog
  
  ) {
    this.PARTIES = data;
    console.log(this.PARTIES);
  }

  ngOnInit() {
  }

  cancel(){
    
  }
  // shipper code search
  openDialogSearchShipper(): void {
    const dialogRef = this.dialog.open(InboundSeaFreightDoPartiesShipperSearchCodeComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
