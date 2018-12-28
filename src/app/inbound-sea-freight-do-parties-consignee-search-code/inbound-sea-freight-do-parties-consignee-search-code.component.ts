import { Component, OnInit } from '@angular/core';
import { iConsigneeSearchCode } from '../interfaces/consigneesearchcode.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-parties-consignee-search-code',
  templateUrl: './inbound-sea-freight-do-parties-consignee-search-code.component.html',
  styleUrls: ['./inbound-sea-freight-do-parties-consignee-search-code.component.css']
})
export class InboundSeaFreightDoPartiesConsigneeSearchCodeComponent implements OnInit {
  selected = 'Code';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iConsigneeSearchCode[] = [{
  code: '',
  name: ''
}];