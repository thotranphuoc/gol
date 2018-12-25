import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListPortOfDischargeSearchComponent } from './inbound-sea-freight-do-list-port-of-discharge-search.component';

describe('InboundSeaFreightDoListPortOfDischargeSearchComponent', () => {
  let component: InboundSeaFreightDoListPortOfDischargeSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListPortOfDischargeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListPortOfDischargeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListPortOfDischargeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
