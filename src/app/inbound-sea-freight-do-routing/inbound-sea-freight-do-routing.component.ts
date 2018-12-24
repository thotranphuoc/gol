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
      data: this.ROUTING
    });

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
