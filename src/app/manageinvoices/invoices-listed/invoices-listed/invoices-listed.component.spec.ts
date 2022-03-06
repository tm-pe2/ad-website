import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesListedComponent } from './invoices-listed.component';

describe('InvoicesListedComponent', () => {
  let component: InvoicesListedComponent;
  let fixture: ComponentFixture<InvoicesListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesListedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
