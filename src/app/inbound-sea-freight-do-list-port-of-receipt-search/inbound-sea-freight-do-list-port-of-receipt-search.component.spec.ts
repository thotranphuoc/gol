import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListPortOfReceiptSearchComponent } from './inbound-sea-freight-do-list-port-of-receipt-search.component';

describe('InboundSeaFreightDoListPortOfReceiptSearchComponent', () => {
  let component: InboundSeaFreightDoListPortOfReceiptSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListPortOfReceiptSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListPortOfReceiptSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListPortOfReceiptSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
