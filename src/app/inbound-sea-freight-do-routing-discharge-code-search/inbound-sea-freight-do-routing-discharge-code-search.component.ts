import { Component, OnInit } from '@angular/core';
import { iDischargeCode } from '../interfaces/dischargecode.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-routing-discharge-code-search',
  templateUrl: './inbound-sea-freight-do-routing-discharge-code-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-routing-discharge-code-search.component.css']
})
export class InboundSeaFreightDoRoutingDischargeCodeSearchComponent implements OnInit {
  displayedColumns = ['no','port_code','port_name','country_name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iDischargeCode[] = [{
  port_code: '',
  port_name: '',
  country_name: ''
}];
