import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListShipperSearchComponent } from './inbound-sea-freight-do-list-shipper-search.component';

describe('InboundSeaFreightDoListShipperSearchComponent', () => {
  let component: InboundSeaFreightDoListShipperSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListShipperSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListShipperSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListShipperSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
