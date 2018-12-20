import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoPartiesShipperSearchCodeComponent } from './inbound-sea-freight-do-parties-shipper-search-code.component';

describe('InboundSeaFreightDoPartiesShipperSearchCodeComponent', () => {
  let component: InboundSeaFreightDoPartiesShipperSearchCodeComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoPartiesShipperSearchCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoPartiesShipperSearchCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoPartiesShipperSearchCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
