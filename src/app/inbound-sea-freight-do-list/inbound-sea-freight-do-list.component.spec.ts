import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDOListComponent } from './inbound-sea-freight-do-list.component';

describe('InboundSeaFreightDOListComponent', () => {
  let component: InboundSeaFreightDOListComponent;
  let fixture: ComponentFixture<InboundSeaFreightDOListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDOListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
