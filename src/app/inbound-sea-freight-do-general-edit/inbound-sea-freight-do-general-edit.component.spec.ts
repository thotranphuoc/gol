import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoGeneralEditComponent } from './inbound-sea-freight-do-general-edit.component';

describe('InboundSeaFreightDoGeneralEditComponent', () => {
  let component: InboundSeaFreightDoGeneralEditComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoGeneralEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoGeneralEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoGeneralEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
