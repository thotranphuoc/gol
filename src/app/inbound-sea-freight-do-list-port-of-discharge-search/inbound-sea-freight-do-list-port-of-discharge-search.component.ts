import { Component, OnInit } from '@angular/core';
import {iListPortofDischargeSearch} from '../interfaces/list-port-of-discharge-search.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-list-port-of-discharge-search',
  templateUrl: './inbound-sea-freight-do-list-port-of-discharge-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-port-of-discharge-search.component.css']
})
export class InboundSeaFreightDoListPortOfDischargeSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListPortofDischargeSearch[] = [{
  code: '',
  name: ''
}];