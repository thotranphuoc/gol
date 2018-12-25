import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListFinalDestinationSearchComponent } from './inbound-sea-freight-do-list-final-destination-search.component';

describe('InboundSeaFreightDoListFinalDestinationSearchComponent', () => {
  let component: InboundSeaFreightDoListFinalDestinationSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListFinalDestinationSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListFinalDestinationSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListFinalDestinationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
