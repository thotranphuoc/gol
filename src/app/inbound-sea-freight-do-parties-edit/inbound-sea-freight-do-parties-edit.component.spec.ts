import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoPartiesEditComponent } from './inbound-sea-freight-do-parties-edit.component';

describe('InboundSeaFreightDoPartiesEditComponent', () => {
  let component: InboundSeaFreightDoPartiesEditComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoPartiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoPartiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoPartiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
