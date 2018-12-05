import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDOCommunicationComponent } from './inbound-sea-freight-do-communication.component';

describe('InboundSeaFreightDOCommunicationComponent', () => {
  let component: InboundSeaFreightDOCommunicationComponent;
  let fixture: ComponentFixture<InboundSeaFreightDOCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDOCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDOCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
