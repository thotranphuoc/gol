import { Component, OnInit } from '@angular/core';
import { GOL } from '../tmp/temp';
import { iHBL } from '../interfaces/hbl.interface';
@Component({
  selector: 'app-inbound-sea-freight-do-list-table',
  templateUrl: './inbound-sea-freight-do-list-table.component.html',
  styleUrls: ['./inbound-sea-freight-do-list-table.component.css']
})
export class InboundSeaFreightDoListTableComponent implements OnInit {

  displayedColumns =
    ['filejob_no', 'hbl_no', 'mbl', 'do_no', 'shipper', 'cnee', 'carrier', 'handling_agent', 'por', 'pol', 'pod', 'final_destination', 'vessel', 'voy', 'etd', 'eta', 'original_hbl_required', 'freight_term', 'shipment_type', 'shipment_status', 'payment_status', 'hbl_type', 'hbl_name', 'shipment_code', 'cargo_source', 'cus_declaration_no', 'po_no', 'contract_no', 'salesman', 'posting_date', 'created_by', 'on1', 'last_update', 'on2'];
  dataSource = ELEMENT_DATA;
  displayedColumnsName = ['File/Job No','HBL No','M.B/L','D/O No','Shipper','Cnee','Carrier','Handling Agent','POR','POL','POD','Final Destination','Vessel','Voy.','ETD','ETA','Original HBL Required','Freight Term','Shipment Type','Shipment Status','Payment Status','H.B/L Type','H.B/L Name','Shipment code','Cargo source','Cus. Declaration No','P.O.No','Contract No','Salesman','Posting Date','Created By','On','Last Update','On'];
  
  ngOnInit() {
    console.log(this.dataSource);
  }
}

export interface ListTableElement {
  filejob_no: string;
  hbl_no: string;
  mbl: string;
  do_no: string;
  shipper: string;
  cnee: string;
  carrier: string;
  handling_agent: string;
  por: string;
  pol: string;
  pod: string;
  final_destination: string;
  vessel: string;
  voy: string;
  etd: string;
  eta: string;
  original_hbl_required: string;
  freight_term: string;
  shipment_type: string;
  shipment_status: string;
  payment_status: string;
  hbl_type: string;
  hbl_name: string;
  shipment_code: string;
  cargo_source: string;
  cus_declaration_no: string;
  po_no: string;
  contract_no: string;
  salesman: string;
  posting_date: string;
  created_by: string;
  on1: string;
  last_update: string;
  on2: string;
}

// const ELEMENT_DATA: ListTableElement[] = [
//   // {
//   //   filejob_no: 'Test DO 1111',
//   //   hbl_no: 'HBL No 1111',
//   //   mbl: 'MBL Test',
//   //   do_no: 'DO 1234',
//   //   shipper: 'Shipper 123',
//   //   cnee: 'Cnee 123',
//   //   carrier: 'Carrier 123',
//   //   handling_agent: 'HA 123456',
//   //   por: '123476',
//   //   pol: '123456',
//   //   pod: '1234567',
//   //   final_destination: 'HAi Phong',
//   //   vessel: '12345676',
//   //   voy: '345677',
//   //   etd: '234568',
//   //   eta: '23456868',
//   //   original_hbl_required: '36353553',
//   //   freight_term: 'hhrhryr4646',
//   //   shipment_type: '64646464',
//   //   shipment_status: '464646464',
//   //   payment_status: 'Done',
//   //   hbl_type: 'DO Template',
//   //   hbl_name: 'DO Name',
//   //   shipment_code: '123456',
//   //   cargo_source: 'rryryry',
//   //   cus_declaration_no: '44646464',
//   //   po_no: 'po no ưe',
//   //   contract_no: '234567',
//   //   salesman: 'Teme',
//   //   posting_date: '11-23-2013',
//   //   created_by: 'userdemo',
//   //   on1: '3df86686',
//   //   last_update: '12-28-2013',
//   //   on2: 'hehehe34567'
//   // },

// ];

const ELEMENT_DATA: iHBL[] = GOL.HBL1;
