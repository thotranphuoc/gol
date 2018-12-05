import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDOCargoComponent } from './inbound-sea-freight-do-cargo.component';

describe('InboundSeaFreightDOCargoComponent', () => {
  let component: InboundSeaFreightDOCargoComponent;
  let fixture: ComponentFixture<InboundSeaFreightDOCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDOCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDOCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
