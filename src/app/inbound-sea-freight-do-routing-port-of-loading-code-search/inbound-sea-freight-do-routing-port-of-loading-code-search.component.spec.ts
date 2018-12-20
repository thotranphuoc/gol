import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent } from './inbound-sea-freight-do-routing-port-of-loading-code-search.component';

describe('InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent', () => {
  let component: InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoRoutingPortOfLoadingCodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
