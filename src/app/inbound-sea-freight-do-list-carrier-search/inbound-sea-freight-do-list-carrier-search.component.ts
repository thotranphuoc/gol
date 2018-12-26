import { Component, OnInit } from '@angular/core';
import {iListCarrierSearch} from '../interfaces/list-carrier-search.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-list-carrier-search',
  templateUrl: './inbound-sea-freight-do-list-carrier-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-carrier-search.component.css']
})
export class InboundSeaFreightDoListCarrierSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListCarrierSearch[] = [{
  code: '',
  name: ''
}];