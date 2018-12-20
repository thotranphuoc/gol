import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoCargoEditComponent } from './inbound-sea-freight-do-cargo-edit.component';

describe('InboundSeaFreightDoCargoEditComponent', () => {
  let component: InboundSeaFreightDoCargoEditComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoCargoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoCargoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoCargoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
