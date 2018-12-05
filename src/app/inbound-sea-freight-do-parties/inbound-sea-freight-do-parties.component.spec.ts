import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDOPartiesComponent } from './inbound-sea-freight-do-parties.component';

describe('InboundSeaFreightDOPartiesComponent', () => {
  let component: InboundSeaFreightDOPartiesComponent;
  let fixture: ComponentFixture<InboundSeaFreightDOPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDOPartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDOPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
