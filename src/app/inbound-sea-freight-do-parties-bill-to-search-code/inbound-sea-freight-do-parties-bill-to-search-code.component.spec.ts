import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoPartiesBillToSearchCodeComponent } from './inbound-sea-freight-do-parties-bill-to-search-code.component';

describe('InboundSeaFreightDoPartiesBillToSearchCodeComponent', () => {
  let component: InboundSeaFreightDoPartiesBillToSearchCodeComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoPartiesBillToSearchCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoPartiesBillToSearchCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoPartiesBillToSearchCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
