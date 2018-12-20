import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GolService {
  URLstr = 'http://services.shippingspace.net/GOL.SMS.Services.GateWay/API/HBL/search?'
  ACCID = '0ED570F3-199D-4DF5-B28C-DCA16FF9647A';
  _WID = 'C28CB0BF-914F-4556-94EC-C4840848D214'

  constructor(
    private httpClient: HttpClient
  ) {

  }

  HBLgetAll() {
    let endpoint = this.URLstr + 'accid=' + this.ACCID + '&_wid=' + this._WID;
    console.log(endpoint);
    this.httpClient.get(endpoint)
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      })
  }
}
