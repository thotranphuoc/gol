import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent } from './inbound-sea-freight-do-routing-place-of-delivery-code-search.component';

describe('InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent', () => {
  let component: InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoRoutingPlaceOfDeliveryCodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
