import { Component, OnInit } from '@angular/core';
import { iShipperSearchCode} from '../interfaces/shippersearchcode.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-parties-shipper-search-code',
  templateUrl: './inbound-sea-freight-do-parties-shipper-search-code.component.html',
  styleUrls: ['./inbound-sea-freight-do-parties-shipper-search-code.component.css']
})
export class InboundSeaFreightDoPartiesShipperSearchCodeComponent implements OnInit {
  displayedColumns = ['no','contact_code','contact_name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iShipperSearchCode[] = [{
  code: '',
  name: ''
}];
