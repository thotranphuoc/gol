import { Component, OnInit } from '@angular/core';
import { iListShipperSearch } from '../interfaces/list-shipper-search.interface';

@Component({
  selector: 'app-inbound-sea-freight-do-list-shipper-search',
  templateUrl: './inbound-sea-freight-do-list-shipper-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-shipper-search.component.css']
})
export class InboundSeaFreightDoListShipperSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListShipperSearch[] = [{code: '',name: ''}];