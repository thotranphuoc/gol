import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDOComponent } from './inbound-sea-freight-do.component';

describe('InboundSeaFreightDOComponent', () => {
  let component: InboundSeaFreightDOComponent;
  let fixture: ComponentFixture<InboundSeaFreightDOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
