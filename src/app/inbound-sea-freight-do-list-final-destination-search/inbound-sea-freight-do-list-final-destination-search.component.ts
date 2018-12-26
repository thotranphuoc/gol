import { Component, OnInit } from '@angular/core';
import { iListFinalDestinationSearch } from '../interfaces/list-final-destination-search.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-list-final-destination-search',
  templateUrl: './inbound-sea-freight-do-list-final-destination-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-final-destination-search.component.css']
})
export class InboundSeaFreightDoListFinalDestinationSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListFinalDestinationSearch[] = [{
  code: '',
  name: ''
}];