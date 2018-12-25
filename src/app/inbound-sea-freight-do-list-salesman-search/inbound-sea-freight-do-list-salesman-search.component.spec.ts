import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListSalesmanSearchComponent } from './inbound-sea-freight-do-list-salesman-search.component';

describe('InboundSeaFreightDoListSalesmanSearchComponent', () => {
  let component: InboundSeaFreightDoListSalesmanSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListSalesmanSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListSalesmanSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListSalesmanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
