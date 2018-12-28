import { Component, OnInit } from '@angular/core';
import { iOriginCode } from '../interfaces/oringincode.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-routing-original-code-search',
  templateUrl: './inbound-sea-freight-do-routing-original-code-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-routing-original-code-search.component.css']
})
export class InboundSeaFreightDoRoutingOriginalCodeSearchComponent implements OnInit {
  selected = 'Code';
  displayedColumns = ['no','port_code','port_name','country_name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iOriginCode[] = [{
  port_code: '',
  port_name: '',
  country_name: ''
}];