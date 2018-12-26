import { Component, OnInit } from '@angular/core';
import {iListSalesmanSearch} from '../interfaces/list-salesman-search.interface';

@Component({
  selector: 'app-inbound-sea-freight-do-list-salesman-search',
  templateUrl: './inbound-sea-freight-do-list-salesman-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-salesman-search.component.css']
})
export class InboundSeaFreightDoListSalesmanSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListSalesmanSearch[] = [{
  code: '',
  name: ''
}];