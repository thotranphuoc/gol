import { Component, OnInit } from '@angular/core';
import { iBilltoSearchCode} from '../interfaces/billtosearchcode.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-parties-bill-to-search-code',
  templateUrl: './inbound-sea-freight-do-parties-bill-to-search-code.component.html',
  styleUrls: ['./inbound-sea-freight-do-parties-bill-to-search-code.component.css']
})
export class InboundSeaFreightDoPartiesBillToSearchCodeComponent implements OnInit {
  displayedColumns = ['no','code','name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA: iBilltoSearchCode[] = [{
  code: '',
  name: ''
}];