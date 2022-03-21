import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageTickets } from './manage-tickets.component';


describe('ManageTicketsComponent', () => {
  let component: ManageTickets;
  let fixture: ComponentFixture<ManageTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTickets ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTickets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
