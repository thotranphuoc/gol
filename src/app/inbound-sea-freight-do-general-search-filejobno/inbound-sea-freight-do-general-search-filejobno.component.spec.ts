import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoGeneralSearchFilejobnoComponent } from './inbound-sea-freight-do-general-search-filejobno.component';

describe('InboundSeaFreightDoGeneralSearchFilejobnoComponent', () => {
  let component: InboundSeaFreightDoGeneralSearchFilejobnoComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoGeneralSearchFilejobnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoGeneralSearchFilejobnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoGeneralSearchFilejobnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
