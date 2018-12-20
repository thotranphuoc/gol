import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoRoutingOriginalCodeSearchComponent } from './inbound-sea-freight-do-routing-original-code-search.component';

describe('InboundSeaFreightDoRoutingOriginalCodeSearchComponent', () => {
  let component: InboundSeaFreightDoRoutingOriginalCodeSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoRoutingOriginalCodeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoRoutingOriginalCodeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoRoutingOriginalCodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
