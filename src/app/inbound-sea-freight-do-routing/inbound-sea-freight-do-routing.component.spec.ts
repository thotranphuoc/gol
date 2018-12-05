import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDORoutingComponent } from './inbound-sea-freight-do-routing.component';

describe('InboundSeaFreightDORoutingComponent', () => {
  let component: InboundSeaFreightDORoutingComponent;
  let fixture: ComponentFixture<InboundSeaFreightDORoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDORoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDORoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
