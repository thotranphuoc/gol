import { Component, OnInit } from '@angular/core';
import {iListPortofLoadingSearch} from '../interfaces/list-port-of-loading-search.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-list-port-of-loading-search',
  templateUrl: './inbound-sea-freight-do-list-port-of-loading-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-port-of-loading-search.component.css']
})
export class InboundSeaFreightDoListPortOfLoadingSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListPortofLoadingSearch[] = [{
  code: '',
  name: ''
}];