import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListCargoSourceSearchComponent } from './inbound-sea-freight-do-list-cargo-source-search.component';

describe('InboundSeaFreightDoListCargoSourceSearchComponent', () => {
  let component: InboundSeaFreightDoListCargoSourceSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListCargoSourceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListCargoSourceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListCargoSourceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
