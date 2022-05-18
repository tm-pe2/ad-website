import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageinvoicesComponent } from './manageinvoices.component';

describe('ManageinvoicesComponent', () => {
  let component: ManageinvoicesComponent;
  let fixture: ComponentFixture<ManageinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageinvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
