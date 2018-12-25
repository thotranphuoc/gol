import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListCneeSearchComponent } from './inbound-sea-freight-do-list-cnee-search.component';

describe('InboundSeaFreightDoListCneeSearchComponent', () => {
  let component: InboundSeaFreightDoListCneeSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListCneeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListCneeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListCneeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
