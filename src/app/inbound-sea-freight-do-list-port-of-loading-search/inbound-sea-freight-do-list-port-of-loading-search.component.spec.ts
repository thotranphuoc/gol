import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListPortOfLoadingSearchComponent } from './inbound-sea-freight-do-list-port-of-loading-search.component';

describe('InboundSeaFreightDoListPortOfLoadingSearchComponent', () => {
  let component: InboundSeaFreightDoListPortOfLoadingSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListPortOfLoadingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListPortOfLoadingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListPortOfLoadingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
