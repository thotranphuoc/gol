import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboundSeaFreightDoListTableComponent } from './inbound-sea-freight-do-list-table.component';

describe('InboundSeaFreightDoListTableComponent', () => {
  let component: InboundSeaFreightDoListTableComponent;
  let fixture: ComponentFixture<InboundSeaFreightDoListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboundSeaFreightDoListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboundSeaFreightDoListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
