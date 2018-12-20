import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent } from './inbound-sea-freight-do-parties-actual-consignee-search-code.component';

describe('InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent', () => {
  let component: InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoPartiesActualConsigneeSearchCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
