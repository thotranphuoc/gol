import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbound-sea-freight-do-general-search-filejobno',
  templateUrl: './inbound-sea-freight-do-general-search-filejobno.component.html',
  styleUrls: ['./inbound-sea-freight-do-general-search-filejobno.component.css']
})
export class InboundSeaFreightDoGeneralSearchFilejobnoComponent implements OnInit {
  displayedColumns =
    ['filejob_no', 'moving_type', 'org', 'dest', 'vessel', 'voy', 'eta', 'h_agent_code', 'h_agent_name'];
  //dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

export interface ListTableSearchFileNo{
  filejob_no: string;
  moving_type: string;
  org: string;
  dest: string;
  vessel: string;
  voy: string;
  eta: string;
  h_agent_code: string;
  h_agent_name: string;
}
// const ELEMENT_DATA: ListTableSearchFileNo = [
//   filejob_no: '',
//   moving_type: '',
//   org: '',
//   dest: '',
//   vessel: '',
//   voy: '',
//   eta: '',
//   h_agent_code: '',
//   h_agent_name: ''
// ];