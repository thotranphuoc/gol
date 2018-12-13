import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbountSeaFreightDoRoutingEditComponent } from './inbount-sea-freight-do-routing-edit.component';

describe('InbountSeaFreightDoRoutingEditComponent', () => {
  let component: InbountSeaFreightDoRoutingEditComponent;
  let fixture: ComponentFixture<InbountSeaFreightDoRoutingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbountSeaFreightDoRoutingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbountSeaFreightDoRoutingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
