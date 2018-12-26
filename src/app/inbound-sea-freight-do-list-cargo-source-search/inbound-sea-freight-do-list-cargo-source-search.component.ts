import { Component, OnInit } from '@angular/core';
import { iListCargoSourceSearch } from '../interfaces/list-cargo-source-search.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-list-cargo-source-search',
  templateUrl: './inbound-sea-freight-do-list-cargo-source-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-cargo-source-search.component.css']
})
export class InboundSeaFreightDoListCargoSourceSearchComponent implements OnInit {
  selected = '30';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iListCargoSourceSearch[] = [{
  code: '',
  name: ''
}];