import { Component, OnInit } from '@angular/core';
import { iSearchFileNo} from '../interfaces/searchfileno.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-general-search-filejobno',
  templateUrl: './inbound-sea-freight-do-general-search-filejobno.component.html',
  styleUrls: ['./inbound-sea-freight-do-general-search-filejobno.component.css']
})
export class InboundSeaFreightDoGeneralSearchFilejobnoComponent implements OnInit {
  selected = 'File No';
  displayedColumns =
    ['no','filejob_no', 'moving_type', 'org', 'dest', 'vessel', 'voy', 'eta', 'h_agent_code', 'h_agent_name'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
const ELEMENT_DATA:iSearchFileNo[] = [
  {
    filejob_no: '',
    moving_type: '',
    org: '',
    dest: '',
    vessel: '',
    voy: '',
    eta: '',
    h_agent_code: '',
    h_agent_name:''
  }
];