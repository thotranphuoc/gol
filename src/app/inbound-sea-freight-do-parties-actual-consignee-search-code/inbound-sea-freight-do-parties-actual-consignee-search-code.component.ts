import { Component, OnInit } from '@angular/core';
import { iActualConsigneeSearchCode } from '../interfaces/actualconsigneesearchcode.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-parties-actual-consignee-search-code',
  templateUrl: './inbound-sea-freight-do-parties-actual-consignee-search-code.component.html',
  styleUrls: ['./inbound-sea-freight-do-parties-actual-consignee-search-code.component.css']
})
export class InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent implements OnInit {
  selected = 'Code';
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iActualConsigneeSearchCode[] = [{
  code: '',
  name: ''
}];
