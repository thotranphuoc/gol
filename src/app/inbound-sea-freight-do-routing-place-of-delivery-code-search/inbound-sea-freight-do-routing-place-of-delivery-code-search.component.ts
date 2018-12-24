import { Component, OnInit } from '@angular/core';
import { iPlaceofDeliveryCode} from '../interfaces/placeofdeliverycode.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-routing-place-of-delivery-code-search',
  templateUrl: './inbound-sea-freight-do-routing-place-of-delivery-code-search.component.html',
  styleUrls: ['./inbound-sea-freight-do-routing-place-of-delivery-code-search.component.css']
})
export class InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent implements OnInit {
  displayedColumns = ['no','port_code','port_name','country_name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iPlaceofDeliveryCode[] = [{
  port_code: '',
  port_name: '',
  country_name: ''
}];
