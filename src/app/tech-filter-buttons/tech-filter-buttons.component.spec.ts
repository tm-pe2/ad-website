import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechFilterButtonsComponent } from './tech-filter-buttons.component';

describe('TechFilterButtonsComponent', () => {
  let component: TechFilterButtonsComponent;
  let fixture: ComponentFixture<TechFilterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechFilterButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechFilterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
