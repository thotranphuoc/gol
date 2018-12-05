import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDOGeneralComponent } from './inbound-sea-freight-do-general.component';

describe('InboundSeaFreightDOGeneralComponent', () => {
  let component: InboundSeaFreightDOGeneralComponent;
  let fixture: ComponentFixture<InboundSeaFreightDOGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDOGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDOGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
