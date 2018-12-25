import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListHandlingAgentSearchComponent } from './inbound-sea-freight-do-list-handling-agent-search.component';

describe('InboundSeaFreightDoListHandlingAgentSearchComponent', () => {
  let component: InboundSeaFreightDoListHandlingAgentSearchComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListHandlingAgentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListHandlingAgentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListHandlingAgentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
