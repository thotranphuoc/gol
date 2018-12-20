import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material';
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
    private golService: GolService
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

}