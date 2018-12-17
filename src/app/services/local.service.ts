import { Injectable } from '@angular/core';
import { iGeneral } from '../interfaces/general.interface';

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
}
