import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InboundSeaFreightDoCargoEditComponent } from '../inbound-sea-freight-do-cargo-edit/inbound-sea-freight-do-cargo-edit.component';
import { iCargo } from '../interfaces/cargo.interface';
import { LocalService } from '../services/local.service';
@Component({
  selector: 'app-inbound-sea-freight-do-cargo',
  templateUrl: './inbound-sea-freight-do-cargo.component.html',
  styleUrls: ['./inbound-sea-freight-do-cargo.component.css']
})

export class InboundSeaFreightDOCargoComponent implements OnInit {
  CARGO : iCargo;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
  private dialog: MatDialog,
  private localService: LocalService
  ) { 
    this.CARGO = this.localService.CARGO_DEFAULT;
  }

  ngOnInit() {
  }
  openDialogCargo(){
    const dialogRef = this.dialog.open(InboundSeaFreightDoCargoEditComponent, {
      width: '80%',
      height: '90vh',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
