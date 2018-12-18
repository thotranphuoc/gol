import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { iPaties } from '../interfaces/parties.interface';


@Component({
  selector: 'app-inbound-sea-freight-do-parties-edit',
  templateUrl: './inbound-sea-freight-do-parties-edit.component.html',
  styleUrls: ['./inbound-sea-freight-do-parties-edit.component.css']
})
export class InboundSeaFreightDoPartiesEditComponent implements OnInit {
  PARTIES: iPaties;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) {
    this.PARTIES = data;
    console.log(this.PARTIES);
  }

  ngOnInit() {
  }

  cancel(){
    
  }
}
