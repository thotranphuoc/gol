import { Component, OnInit } from '@angular/core';
import {iListHandlingAgentSearch} from '../interfaces/list-handling-agent-search.interface';

@Component({
  selector: 'app-inbound-sea-freight-do-list-handling-agent-search',
  templateUrl: './inbound-sea-freight-do-list-handling-agent-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-handling-agent-search.component.css']
})
export class InboundSeaFreightDoListHandlingAgentSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListHandlingAgentSearch[] = [{
  code: '',
  name: ''
}];