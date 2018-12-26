import { Component, OnInit } from '@angular/core';
import {iListCneeSearch} from '../interfaces/list-cnee-search.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-list-cnee-search',
  templateUrl: './inbound-sea-freight-do-list-cnee-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-cnee-search.component.css']
})
export class InboundSeaFreightDoListCneeSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListCneeSearch[] = [{
  code: '',
  name: ''
}];