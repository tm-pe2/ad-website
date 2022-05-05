import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuscodepageComponent } from './statuscodepage.component';

describe('StatuscodepageComponent', () => {
  let component: StatuscodepageComponent;
  let fixture: ComponentFixture<StatuscodepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuscodepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuscodepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
