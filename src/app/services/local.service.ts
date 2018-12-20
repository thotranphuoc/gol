import { Injectable } from '@angular/core';
import { iGeneral } from '../interfaces/general.interface';
import { iPaties } from '../interfaces/parties.interface';
import { iRouting} from '../interfaces/routing.interface';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  GENERAL_DAFAULT: iGeneral = {
    do_no: '',
    do_type: '',
    doc_name: '',
    hbl_no: '',
    transit_hbl: '',
    filejob_no: '',
    shipment_code: '',
    service_code: '',
    shipment_type: '',
    original_hbl_required: '',
    mbl_no: '',
    posting_date: new Date(),
    po_no: '',
    transaction_code: '',
    agent_ref: '',
    contract_no: '',
    an1st_sendingdate: new Date(),
    an2nd_sendingdate: new Date(),
    an3rd_sendingdate: new Date(),
    cus_declaration_no: ''
  }

  PARTIES_DEFAULT: iPaties = {
    shipper_code: '',
    shipper_name: '',
    shipper_address: '',
    shipper_email: '',
    consignee_code: '',
    consignee_name: '',
    consignee_address: '',
    consignee_email: '',
    actual_consignee_code: '',
    actual_consignee_name: '',
    actual_consignee_address: '',
    billto_code: '',
    billto_name: '',
    billto_address: '',
    notifypart1_name: '',
    notifypart1_address: '',
    notifypart2_name: '',
    notifypart2_address: ''
  }

  ROUTING_DEFAULT: iRouting = {
    original_code: '',
    original_name: '',
    discharge_code: '',
    discharge_name: '',
    favorite_port_discharge: '',
    port_of_loading_code: '',
    port_of_loading_name: '',
    place_of_delivery_code: '',
    place_of_delivery_name: '',
    favorite_port_delivery: '',
    final_dest: '',
    cfs_terminal: '',
    vessel: '',
    voy: '',
    etd: ''
  }
}
