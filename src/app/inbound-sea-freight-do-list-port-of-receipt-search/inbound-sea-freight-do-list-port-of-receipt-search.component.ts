import { Component, OnInit } from '@angular/core';
import {iListPortofReceiptSearch} from '../interfaces/list-port-of-receipt-search.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-list-port-of-receipt-search',
  templateUrl: './inbound-sea-freight-do-list-port-of-receipt-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-port-of-receipt-search.component.css']
})
export class InboundSeaFreightDoListPortOfReceiptSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListPortofReceiptSearch[] = [{
  code: '',
  name: ''
}];