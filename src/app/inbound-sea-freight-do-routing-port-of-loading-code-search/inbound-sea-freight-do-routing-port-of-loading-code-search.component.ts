import { Component, OnInit } from '@angular/core';
import { iPortofLoadingCode } from '../interfaces/portofloadingcode.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-routing-port-of-loading-code-search',
  templateUrl: './inbound-sea-freight-do-routing-port-of-loading-code-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-routing-port-of-loading-code-search.component.css']
})
export class InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent implements OnInit {
  displayedColumns = ['no','port_code','port_name','country_name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iPortofLoadingCode[] = [{
  port_code: '',
  port_name: '',
  country_name: ''
}];