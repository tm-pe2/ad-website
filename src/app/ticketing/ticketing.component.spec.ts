import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TicketingComponent, TableRow } from './ticketing.component';

describe('TicketingComponent', () => {
  let component: TicketingComponent;
  let fixture: ComponentFixture<TicketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketingComponent ],
      imports: [ActivatedRoute]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
