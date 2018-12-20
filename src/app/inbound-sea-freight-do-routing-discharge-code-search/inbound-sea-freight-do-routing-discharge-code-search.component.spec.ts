import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoRoutingDischargeCodeSearchComponent } from './inbound-sea-freight-do-routing-discharge-code-search.component';

describe('InboundSeaFreightDoRoutingDischargeCodeSearchComponent', () => {
  let component: InboundSeaFreightDoRoutingDischargeCodeSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoRoutingDischargeCodeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoRoutingDischargeCodeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoRoutingDischargeCodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
