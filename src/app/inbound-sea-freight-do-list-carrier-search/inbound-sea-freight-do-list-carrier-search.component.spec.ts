import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListCarrierSearchComponent } from './inbound-sea-freight-do-list-carrier-search.component';

describe('InboundSeaFreightDoListCarrierSearchComponent', () => {
  let component: InboundSeaFreightDoListCarrierSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListCarrierSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListCarrierSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListCarrierSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
