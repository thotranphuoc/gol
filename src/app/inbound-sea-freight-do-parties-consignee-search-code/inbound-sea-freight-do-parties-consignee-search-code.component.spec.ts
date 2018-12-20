import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoPartiesConsigneeSearchCodeComponent } from './inbound-sea-freight-do-parties-consignee-search-code.component';

describe('InboundSeaFreightDoPartiesConsigneeSearchCodeComponent', () => {
  let component: InboundSeaFreightDoPartiesConsigneeSearchCodeComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoPartiesConsigneeSearchCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoPartiesConsigneeSearchCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoPartiesConsigneeSearchCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
